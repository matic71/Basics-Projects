class Comments {

  post_id = '';
 
  user_id = '';
  content = '';
  username = '';
  api_url = 'https://67d7862e9d5e3a10152b063d.mockapi.io/';
  
  // Funkcija za kreiranje komentara
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


  

  async get(post_id) {
      let api_url = this.api_url + '/comments';

      const response = await fetch(api_url);
      
      const data = await response.json();

 
     
      let postcomments = [];

      let i = 0 ;

      data.forEach(item => {
          if (item.post_id === post_id) {
              postcomments[i] = item;
              i++;
          }
      });

      return postcomments;
  }




  
async delete(comment_id){

 
    const response = await fetch(this.api_url + '/comments/' + comment_id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    
    });

}


}