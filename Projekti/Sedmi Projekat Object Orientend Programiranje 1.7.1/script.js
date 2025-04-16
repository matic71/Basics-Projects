let configuration = {
   'ime_prezime': {
   required : true,
   minlength : 3,
   maxlength : 20,
    },
    'korisnicko_ime':{
        
        required : true,
        minlength : 5,
        maxlength : 15,
     },
    'email':{
        required:true,
        email:true,
        minlength : 5,
        maxlength : 30,
    },
    'broj_telefona':{
        required:false,
        minlength: 5,
        maxlength : 15,
    },
    'zip_code':{
        required: false,
        length: 6,

       },
    'lozinka':{
        required:true,
        minlength: 5,
        maxlength: 20,
        matching : 'ponovi_lozinku'
    },
    'ponovi_lozinku':{
        required:true,
        minlength: 5,
        maxlength: 20,
        matching : 'lozinka',

    },
 
};




let validator =  new  Validator(configuration);