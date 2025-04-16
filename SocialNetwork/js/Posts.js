class Posts {

  post_id = '';
  post_content = '';
  user_id = '';
  likes = '';
  api_url = 'https://67d7862e9d5e3a10152b063d.mockapi.io/';

  // Kreiranje posta
  async create() {
    let session = new Session();
    let session_id = session.getSession();

    let data = {
      user_id: session_id,
      content: this.post_content,
      likes: 0,
    };

    data = JSON.stringify(data);

    let response = await fetch(this.api_url + '/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    });

    data = await response.json();
    return data;
  }

  // Dohvatanje svih postova
  async getAllPosts() {
    let response = await fetch(this.api_url + '/posts');
    let data = await response.json();
    return data;
  }

  // Brisanje posta po ID-ju
  delete(post_id) {
    fetch(this.api_url + '/posts/' + post_id, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => { /* bez dodatne logike */ });
  }

  // Dodavanje like-a na post
  like(post_id, likes) {
    let data = {
      likes: likes,
    };

    data = JSON.stringify(data);

    fetch(this.api_url + '/posts/' + post_id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })
    .then(response => response.json())
    .then(data => { /* bez dodatne logike */ });
  }

  // Brisanje svih postova od korisnika
  async deleteByUserId(session_id) {
    const response = await fetch(this.api_url + '/posts');
    const allPosts = await response.json();

    const relatedPosts = allPosts.filter(post => post.user_id === session_id);

    for (let post of relatedPosts) {
      await fetch(this.api_url + '/posts/' + post.id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  }
}
