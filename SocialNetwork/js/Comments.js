class Comments {
  post_id = '';
  user_id = '';
  content = '';
  username = '';
  api_url = 'https://67d7862e9d5e3a10152b063d.mockapi.io/';

  // Kreiranje komentara
  async create() {
    let data = {
      post_id: this.post_id,
      content: this.content,
      user_id: this.user_id,
      username: this.username,
    };

    const response = await fetch(this.api_url + '/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  }

  // Dohvatanje svih komentara za jedan post
  async get(post_id) {
    const response = await fetch(this.api_url + '/comments');
    const data = await response.json();

    let postcomments = [];

    data.forEach(item => {
      if (item.post_id === post_id) {
        postcomments.push(item);
      }
    });

    return postcomments;
  }

  // Brisanje jednog komentara po ID-ju
  async delete(comment_id) {
    const response = await fetch(this.api_url + '/comments/' + comment_id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return await response.json();
  }


  async deleteByPostId(post_id) {
    const response = await fetch(this.api_url + '/comments');
    const allComments = await response.json();

    const relatedComments = allComments.filter(comment => comment.post_id === post_id);

    for (let comment of relatedComments) {
      await fetch(this.api_url + '/comments/' + comment.id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  }



  async deleteCommentByUserId(session_id) {
    const response = await fetch(this.api_url + '/comments');
    const allComments = await response.json();
  
    const relatedComments = allComments.filter(comment => comment.user_id === session_id);
  
    for (let comment of relatedComments) {
      await fetch(this.api_url + '/comments/' + comment.id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  }
  
}
