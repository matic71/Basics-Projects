class Session {
    // Svojstvo za ID korisnika
    userid = '';
  
    // Metoda za pokretanje sesije
    startSession() {
      // Kreiranje novog datuma
      const d = new Date();
  
      // Postavljanje vremena isteka sesije na 2 dana od trenutnog trenutka
      d.setTime(d.getTime() + (2 * 24 * 60 * 60 * 1000));
  
      // Kreiranje stringa sa datumom isteka
      let expires = "expires=" + d.toUTCString();
  
      // Postavljanje kolačića sa ID-jem korisnika i vremenom isteka
      document.cookie = "userid=" + this.userid + ";" + expires;
    }

    getSession(){

      let name = 'userid=';
      let ca = document.cookie.split(';');

      for(let i = 0; i < ca.length;i++){

        let c = ca[i];
        while (c.charAt(0) == ' '){
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0){
          return c.substring(name.length, c.length);
        }
      }
      return "" ;
    }

destroySession(){

  let cookies = document.cookie.split(';');

  for (let i = 0; i <cookies.length; i++){

    let cookie = cookies[i];
    let eqPos = cookie.indexOf("=");
    let name = eqPos > -1 ? cookie.substr(0,eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

  }

