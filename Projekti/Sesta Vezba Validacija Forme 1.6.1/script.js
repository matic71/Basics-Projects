let inputs = document.querySelectorAll('input');
let errors = {"ime_prezime": [],
              "korisnicko_ime" :[],
              "email" :[],
              "lozinka" :[],
              "ponovi_lozinku" :[],
}



inputs.forEach(element => {
    

    element.addEventListener('change', e =>{

let currentinput = e.target ;
let inputvalue = currentinput.value;
let inputName = currentinput.getAttribute('name');

console.log(errors[inputName]);


if(inputvalue.length>4){

errors[inputName] = [];
switch (inputName){


case 'ime_prezime' :
 
let validation  = inputvalue.trim();
validation = validation.split(" ");
if (validation.length<2){
    errors[inputName].push  ('Morate upisati i ime i prezime!');
    
}
break;

case 'email' :

if(!ValidateEmail(inputvalue)){

    errors[inputName].push  ('Mail nije validan!');
}


break;

case  'ponovi_lozinku':


let lozinka = document.querySelector('input[name="lozinka"]').value
if(inputvalue !== lozinka){


    errors[inputName].push  ('Lozinke se ne poklapaju!');
}
break;

}

}
else{
    errors[inputName] = ['Polje ne moze imati manje od 5 karaktera'];
}

ErrorsValue();
   
});
});






const ErrorsValue = () =>{

  for (let elem of document.querySelectorAll('ul')){


    elem.remove();
  }

for (let keys of Object.keys(errors)){



let input = document.querySelector(`input[name =${keys}]`);

let parentEl = input.parentElement;

let erroselement = document.createElement('ul');
parentEl.appendChild(erroselement);


errors[keys].forEach(error =>{

    let li = document.createElement('li');
    li.innerText = error;
    erroselement.appendChild(li);



})




}
}

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
   
    return (false)
}