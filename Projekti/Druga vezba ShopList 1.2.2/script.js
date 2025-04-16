let alltotal = 0;



 alert ('HTML i CSS nisam ja radio!');




function brisanje(obrisi){
    

        let brisanje = obrisi.closest('.recenica');
        let price = brisanje.querySelector('p span').innerText;
        price = parseInt(price);
        alltotal -= price;
        
       
 document.querySelector('#svezajedno').innerText = `Total : ${alltotal} `;

          
       

        let name = brisanje.querySelector('h3').innerText;
        let svakopovrce = document.querySelectorAll('.single-item');
        

        console.log(name);
        svakopovrce.forEach(function (povrce){
            let nazivpovrca =povrce.querySelector('.si-content h3').innerText ;
          
            if (nazivpovrca === name){
            
                povrce.querySelector('.actions  button').removeAttribute('disabled');
            
                 povrce.querySelector('.actions  input').value = 0 ;
                
                 povrce.querySelector('.actions  button').innerText = 'Dodaj';

                 brisanje = brisanje.remove();
            }

            
        });

}


function addToCart(element) {

let mainEl = element.closest('.single-item');

let naziv = mainEl.querySelector('h3').innerText;

let cartitems = document.querySelector('.cart-items') ;

let price = mainEl.querySelector ('.price').innerText;
price = price.substring(1);

let input = mainEl.querySelector('input').value ;

let ukupnavrednost = parseInt(price)  * parseInt(input) ;





if (parseInt(input) > 0  ){
 
 
    
    let ukupnavrednost = parseInt(price)  * parseInt(input) ;
    
     
    
     
     cartitems.innerHTML += `<div class="recenica">
        <h3> ${naziv}</h3>  
        <p> $${price} x $${input} =  $<span>${ukupnavrednost}</span> </p> 
        <button onclick="brisanje(this)">Ukloni</button>
        </div>` ;

        

  alltotal +=  ukupnavrednost;


 
 document.querySelector('#svezajedno').innerText = `Total : ${alltotal} `;
  
element.innerText = 'Dodato';
element.setAttribute('disabled','true');
    
    }
else{

    alert('Dodaj Kolicinu')
}







}