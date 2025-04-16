const btn = document.querySelector('.header button')

btn.addEventListener('click',()=>{


let lista = document.querySelectorAll('.header ul  ');

lista.forEach(function(item){

   if (btn.innerText === 'MENU'){
    item.style.display = 'block';
    btn.innerText = 'CLOSE'
 }
   else{
  item.style.display = 'none';
  btn.innerText = 'MENU ';

}



})
})

//////////////////////////////////////////////////////////////////////


let leftbtn = document.querySelector('#left-btn');
let rightbtn = document.querySelector('#right-btn');
let pictures = document.querySelectorAll('.slider-images img ');
let picturesnumber = 0 ;

console.log(pictures);
rightbtn.addEventListener('click',()=>{

    displaynone();

    picturesnumber++;


if (picturesnumber=== pictures.length){
    
picturesnumber = 0;
}
    pictures[picturesnumber].style.display = 'block';
    


})



leftbtn.addEventListener('click',()=>{

displaynone();
    picturesnumber--;


if (picturesnumber===-1){
    
picturesnumber = pictures.length - 1;
}
pictures[picturesnumber].style.display = 'block';
    


})


const displaynone = () =>{

    pictures.forEach((img)=>{
    
    img.style.display = 'none';
    
    }) 
    }
     
    








////////////////////////////////////////////////////////////////////



const dugmad = document.querySelectorAll('.portfolio-categories button')



dugmad.forEach(function(dugme){

  
    dugme.addEventListener("click",function(){

    let portfolio_data_category = dugme.getAttribute('data-category');
    let portfolio_item  = document.querySelectorAll('.portfolio-single-item'); 


    console.log(portfolio_data_category);

  
    portfolio_item.forEach((item)=>{
    
        item.style.display = 'none';
        

        if (portfolio_data_category === 'sve'){

            item.style.display = 'block';

        }
    });
  
    
 
    portfolio_item.forEach(function(item){ 


       let  portfolio_item_data_category  = item.getAttribute('data-category') ;
          

       if (portfolio_data_category.includes(portfolio_item_data_category)){

        item.style.display = 'block';
       }



    })

        
    });
})



///////////////////////////////////////////////


let modal_selection = document.querySelectorAll('.modal-section button');

console.log(modal_selection);

modal_selection.forEach(function(btn){


btn.addEventListener('click',function(){

    console.log(btn.innerText);

    if (btn.innerText === 'Modal Button 1'){
let popup_modal_1 = document.querySelector('.popup-modal');
let overlay = document.querySelector('.overlay');

popup_modal_1.style.display = 'block';

overlay.style.display = 'block';

let closebutton = document.querySelector('#closeModal');
console.log(closebutton);

closebutton.addEventListener('click',()=>{

    popup_modal_1.style.display = 'none';

    overlay.style.display = 'none';




})


    }





    if (btn.innerText === 'Modal Button 2'){
        let popup_modal_2 = document.querySelector('.popup-modal2');

        console.log(popup_modal_2);
        let overlay = document.querySelector('.overlay');
        
        popup_modal_2.style.display = 'block';
        
        overlay.style.display = 'block';


        
let closebutton_dva = document.querySelector('#closeModal2');


closebutton_dva.addEventListener('click',()=>{

    popup_modal_2.style.display = 'none';

    overlay.style.display = 'none';




})
            }
})

})




