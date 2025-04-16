// Inicijalizacija sesije
let session = new Session();
let sessionid = session.getSession();

if (sessionid !== " ") {
  (async function PopulateUserData() {
    let user = new User();
    user = await user.get(sessionid);

    document.querySelector('#username').innerText = user.username;
    document.querySelector('#email').innerText = user.email;
    document.querySelector('#korisnicko_ime').value = user.username;
    document.querySelector('#edit_email').value = user.email;
  })();
} else {
  window.location.href = "/";
}

// Odjava
document.querySelector('#logout').addEventListener('click', () => {
  let session = new Session();
  session.destroySession();
  window.location.href = "/";
});

// Modal
document.querySelector('#editaccount').addEventListener('click', () => {
  document.querySelector('.custom-modal').style.display = 'block';
});
document.querySelector('#closeModal').addEventListener('click', () => {
  document.querySelector('.custom-modal').style.display = 'none';
});

// Edit naloga
document.querySelector('#editForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  let user = new User();
  user.username = document.querySelector('#korisnicko_ime').value;
  user.email = document.querySelector('#edit_email').value;

  // POZIVAMO OVDE updateUsernameInComments
  await user.updateUsernameInComments(user.username);

  user.edit();
});

// Brisanje naloga
document.querySelector('#deleteaccount').addEventListener('click', () => {
  let user = new User();
  let session = new Session();
  let post = new Posts();
  let comment = new Comments();

  comment.user_id = sessionid;
  post.user_id = sessionid;

  comment.delete(sessionid);
  post.delete(sessionid);
  session.destroySession();
  user.delete(sessionid);
});

// Kreiranje posta
document.querySelector('#postForm').addEventListener('submit', (e) => {
  e.preventDefault();

  (async function createPost() {
    let content = document.querySelector('#postContent').value.trim();
    if (!content) return;

    document.querySelector('#postContent').value = '';

    let post = new Posts();
    post.post_content = content;
    post = await post.create();

    let currentUser = new User();
    currentUser = await currentUser.get(sessionid);

    let comments = new Comments();
    comments = await comments.get(post.id);

    let comments_html = '';
    comments.forEach(comment => {
      comments_html += `
       <div class='single-comment' comment-data-id='${comment.id}' data-user-id='${comment.user_id}'>
          <p><b>Autor:</b> ${comment.username}</p> ${comment.content}
          ${comment.user_id === sessionid ? `<button class="remove-btn" onclick="removeMyComment(this)">Remove</button>` : ''}
        </div>
      `;
    });

    let delete_post_html = sessionid === post.user_id
      ? '<button class="remove-btn" onclick="removeMyPost(this)">Remove</button>'
      : '';

    let html = document.querySelector('#AllPostsWraper').innerHTML;

    document.querySelector('#AllPostsWraper').innerHTML = `
      <div class='single-post' data-post-id='${post.id}'>
        <div class='post-content'>${content}</div>
        <div class='post-actions'>
          <p><b>Autor:</b> ${currentUser.username}</p>
          <div>
            <button class='likePostJS like-btn' onclick="likePost(this)">
              <span>${post.likes}</span> Likes
            </button>
            <button class='comment-btn' onclick="commentPosts(this)">Comment</button>
            ${delete_post_html}
          </div>
          <div class='post-comments' style="display: none;">
            <form>
              <input placeholder="Napisi Komentar" type="text">
              <button onclick="commentPostSubmit(event)">Comment</button>
            </form>
            ${comments_html}
          </div>
        </div>
      </div>
    ` + html;
  })();
});

// Učitavanje svih postova
async function getAllPosts() {
  let all_post = new Posts();
  all_post = await all_post.getAllPosts();

  for (const post of all_post) {
    let user = new User();
    user = await user.get(post.user_id);

    let comments = new Comments();
    comments = await comments.get(post.id);

    let comments_html = '';
    comments.forEach(comment => {
      comments_html += `
    <div class='single-comment' comment-data-id='${comment.id}' data-user-id='${comment.user_id}'>
          <p><b>Autor:</b> ${comment.username}</p> ${comment.content}
          ${comment.user_id === sessionid ? `<button class="remove-btn" onclick="removeMyComment(this)">Remove</button>` : ''}
        </div>
      `;
    });

    let delete_post_html = sessionid === post.user_id
      ? '<button class="remove-btn" onclick="removeMyPost(this)">Remove</button>'
      : '';

    let html = document.querySelector('#AllPostsWraper').innerHTML;

    document.querySelector('#AllPostsWraper').innerHTML = `
      <div class='single-post' data-post-id='${post.id}'>
        <div class='post-content'>${post.content}</div>
        <div class='post-actions'>
          <p><b>Autor:</b> ${user.username}</p>
          <div>
            <button class='likePostJS like-btn' onclick="likePost(this)">
              <span>${post.likes}</span> Likes
            </button>
            <button class='comment-btn' onclick="commentPosts(this)">Comment</button>
            ${delete_post_html}
          </div>
          <div class='post-comments' style="display: none;">
            <form>
              <input placeholder="Napisi Komentar" type="text">
              <button onclick="commentPostSubmit(event)">Comment</button>
            </form>
            ${comments_html}
          </div>
        </div>
      </div>
    ` + html;
  }
}

getAllPosts();

// Submit komentara
const commentPostSubmit = async (e) => {
  e.preventDefault();

  let btn = e.target;
  btn.setAttribute('disabled', 'true');

  let main_post_el = btn.closest('.single-post');
  let post_id = main_post_el.getAttribute('data-post-id');

  let commentValue = main_post_el.querySelector('input').value.trim();
  if (!commentValue) return;

  let user = new User();
  let currentUser = await user.get(sessionid);
  let username = currentUser.username;

  let comment = new Comments();
  comment.user_id = sessionid;
  comment.post_id = post_id;
  comment.content = commentValue;
  comment.username = username;



  let newComment = await comment.create();

  let commentHTML = `
<div class='single-comment' comment-data-id='${comment.id}' data-user-id='${comment.user_id}'>
      <p><b>Autor:</b> ${newComment.username}</p> ${newComment.content}
      <button class="remove-btn" onclick="removeMyComment(this)">Remove</button>
    </div>
  `;

  main_post_el.querySelector('.post-comments').insertAdjacentHTML('beforeend', commentHTML);
  main_post_el.querySelector('input').value = '';
  btn.removeAttribute('disabled');
};

// Like
const likePost = (btn) => {
  let main = btn.closest('.single-post');
  let post_id = main.getAttribute('data-post-id');
  let likes = parseInt(btn.querySelector('span').textContent, 10);

  btn.querySelector('span').innerText = likes + 1;
  btn.setAttribute('disabled', true);

  let post = new Posts();
  post.like(post_id, likes + 1);
};

// Toggle komentari
const commentPosts = (btn) => {
  let main = btn.closest('.single-post');
  let commentsBox = main.querySelector('.post-comments');
  commentsBox.style.display = commentsBox.style.display === 'block' ? 'none' : 'block';
};

// Brisanje posta
const removeMyPost = (btn) => {
  let post_id = btn.closest('.single-post').getAttribute('data-post-id');
  btn.closest('.single-post').remove();

  let post = new Posts();
  let comment = new Comments();

  comment.post_id = post_id;
  post.delete(post_id);
  comment.delete(post_id);
};

// Brisanje komentara
async function removeMyComment(btn) {
  let comment_id = btn.closest('.single-comment').getAttribute('comment-data-id');
  btn.closest('.single-comment').remove();

  let comments = new Comments();
  await comments.delete(comment_id);
}
