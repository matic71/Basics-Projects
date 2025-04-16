class User {
  // Osnovna svojstva korisnika
  username = '';
  userid = '';
  email = '';
  password = '';
  api_url = 'https://67d7862e9d5e3a10152b063d.mockapi.io/';

  // Metoda za kreiranje novog korisnika
  create() {
    let data = {
      username: this.username,
      email: this.email,
      password: this.password,
    };

    data = JSON.stringify(data); // Pretvaranje podataka u JSON

    fetch(this.api_url + '/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })
    .then(response => response.json())
    .then(data => {
      let session = new Session();
      session.userid = data.id; // Čuvanje ID-ja korisnika
      session.startSession(); // Pokretanje sesije

      window.location.href = 'hexa.html'; // Preusmeravanje na stranicu
    });
  }

  // Metoda za dobijanje podataka korisnika
  async get(userid) {
    let apiurl = this.api_url + '/users/' + userid;
    let response = await fetch(apiurl);
    let data = await response.json();
    return data;
  }

  // Metoda za editovanje korisničkih podataka
  edit() {
    let data = {
      username: this.username,
      email: this.email,
    };

    data = JSON.stringify(data);

    let session = new Session();
    let session_id = session.getSession();

    fetch(this.api_url + '/users/' + session_id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })
    .then(response => response.json())
    .then(data => {
      window.location.href = 'hexa.html'; // Preusmeravanje nakon izmene
    });
  }

  // Metoda za logovanje korisnika
  login() {
    fetch(this.api_url + '/users')
    .then(response => response.json())
    .then(data => {
      let loginsuccessful = 0;

      // Prolazak kroz sve korisnike u bazi
      data.forEach(db_user => {
        if (db_user.email === this.email && db_user.password === this.password) {
          let session = new Session();
          session.userid = db_user.id;
          session.startSession(); // Pokretanje sesije

          loginsuccessful = 1;
          window.location.href = 'hexa.html'; // Uspešan login
        }
      });

      // Ako logovanje nije uspelo
      if (loginsuccessful === 0) {
        alert('Nije dobro');
      }
    });
  }

  // Metoda za brisanje korisnika po ID-ju
  delete(userid) {
    fetch(this.api_url + '/users/' + userid, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log('Korisnik obrisan', data);
      window.location.href = '/'; // Povratak na početnu
    });
  }

  // Ažuriranje username-a u komentarima kada korisnik promeni svoje ime
  async updateUsernameInComments(newUsername) {
    let comments = await fetch(this.api_url + '/comments');
    comments = await comments.json();

    let session = new Session();
    let session_id = session.getSession();

    // Pronađi sve komentare korisnika
    let myComments = comments.filter(comment => comment.user_id === session_id);

    for (let comment of myComments) {
      comment.username = newUsername;

      await fetch(this.api_url + '/comments/' + comment.id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(comment),
      });
    }
  }
}
