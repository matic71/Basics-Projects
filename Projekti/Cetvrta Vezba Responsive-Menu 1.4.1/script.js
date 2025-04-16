const mobileMenu = ()=>{

let menu = document.querySelector('.header ul')
let btn = document.querySelector('.header button');




if (btn.innerText === 'Close'){
     btn.innerText = 'Menu';
     menu.style.display = 'none';
}
else{

    menu.style.display = 'block';
    btn.innerText = 'Close';
}
}



let image = document.querySelectorAll('.slider-images img');

let imgnumber = 0 ;


let leftbutton = document.querySelector('#left-btn');

        leftbutton.addEventListener("click", function(){
      

   
            displaynone();
               
            imgnumber--;
         
         
            if (imgnumber === -1){

                imgnumber= image.length - 1  ;
             }
             image[imgnumber].style.display = 'block';
     
             
        })


let rightbutton  = document.querySelector('#right-btn');

            rightbutton.addEventListener("click", () =>{

              
                displaynone();
               
                imgnumber++;

            
                 if (imgnumber === image.length){

                    imgnumber= 0 ;
                 }
                 image[imgnumber].style.display = 'block';
            })


    const displaynone = () =>{

image.forEach((img)=>{

img.style.display = 'none';

}) 
}
 


const portfolioSort = (button) =>{

let category = button.getAttribute('data-category')

let documentcategory = document.querySelectorAll('.portfolio-single-item')

documentcategory.forEach((item)=>{
    
    item.style.display = 'none';
});


if (category ==='sve' ){


    documentcategory.forEach((item)=>{
        item.style.display = 'block';
    });       
}


documentcategory.forEach((item)=>{

if (item.getAttribute('data-category').includes(category) ){

item.style.display = 'block';


}

})

    function openModal() {


        let modal = document.querySelector('.popup-modal');

        modal.style.display = 'block';


    }
}




