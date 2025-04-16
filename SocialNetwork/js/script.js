let session = new Session(); 
let usersession = session.getSession(); 

if (usersession !== ""){  
  window.location.href = 'hexa.html';  // Ako je korisnik već prijavljen, preusmeri ga na 'hexa.html'
}

// Selektovanje dugmadi i modalnog prozora
let register_button = document.querySelector('#registracija');
let custom_modal = document.querySelector('.custom-modal');

// Kada se klikne na registraciono dugme, prikazuje se modal
register_button.addEventListener('click', () => {
  custom_modal.style.display = 'block';
});

// Kada se klikne na dugme za zatvaranje modala, modal se sakriva
let closeModal_button = document.querySelector('#closeModal');
closeModal_button.addEventListener('click', () => {
  custom_modal.style.display = 'none';
});

// Pravila za validaciju forme
let config = {
  'korisnicko_ime': {
    required: true,
    minlength: 5,
    maxlength: 15,
  },
  'email': {
    required: true,
    email: true,
    minlength: 5,
    maxlength: 30,
  },
  'lozinka': {
    required: true,
    minlength: 5,
    maxlength: 20,
    matching: 'ponovi_lozinku',
  },
  'ponovi_lozinku': {
    required: true,
    minlength: 5,
    maxlength: 20,
    matching: 'lozinka',
  },
};

// Kreiranje validator objekta
let validator = new Validator(config, '#registrationForm');

// Kada se forma za registraciju pošalje, proverava se validacija
document.querySelector('#registrationForm').addEventListener('submit', (e) => {
  e.preventDefault();  // Sprečava reload stranice

  // Ako je validacija uspešna, kreiramo korisnika
  if (validator.validationPassed()) {
    let user = new User();
    user.username = document.querySelector('#korisnicko_ime').value;
    user.email = document.querySelector('#email').value;
    user.password = document.querySelector('#lozinka').value;
    user.create();  // Kreiranje novog korisnika
  } else {
    alert('Pogrešno uneti podaci');  // Ako validacija nije prošla
  }
});

// Login forma
document.querySelector('#loginForm').addEventListener('submit', (e) => {
  e.preventDefault();  // Sprečava reload stranice

  // Uzimanje email-a i lozinke iz forme
  let email = document.querySelector('#login_email').value;
  let password = document.querySelector('#login_lozinka').value;

  // Kreiranje objekta korisnika i pokušaj logovanja
  let user = new User();
  user.email = email;
  user.password = password;
  user.login();  // Prijavljivanje korisnika
});