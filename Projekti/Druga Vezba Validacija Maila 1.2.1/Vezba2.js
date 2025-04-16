function provera (){

let mail = document.querySelector('#mail').value 

if (mail.includes('@') && mail.includes('.')){

     
    let pozicijatacke = mail.indexOf('.');
    let pozicijaa = mail.indexOf('@');
        
    
     let gmail = mail.substring(pozicijaa + 1, pozicijatacke).length;
     let com = mail.substring(pozicijatacke + 1 ).length;
     let pregmaila = mail.substring(0, pozicijaa ).length ;
    
     
     
          if (gmail>4 && com>0 && pregmaila>3 ){
        alert('validan');
        }
        else{
     alert('nije validan')
        }

   

}

    else {

    alert('nije validan mail')
}



}