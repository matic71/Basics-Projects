
//ButtonClick


const dugmad = document.querySelectorAll('button');

dugmad.forEach(function(dugme){

    dugme.addEventListener("click",function(){

        console.log(dugme.innerText);
    });
})




//LinkSubmit
const link = document.querySelector('a');

link.addEventListener("click",(event)=>{

event.preventDefault();
console.log(event.target);
})



const forma = document.querySelector('form');

forma.addEventListener("submit",(event)=>{


    event.preventDefault();
})





//WindowChange

const select = document.querySelector('select');

select.addEventListener("change",(event)=>{

console.log(event.target.value);

});

window.addEventListener("resize",(event)=>{

if (event.width>1000){
    console.log('veci je od 1000')
}
else{
    console.log('manji je od 1000')
}

})

//InputKeyDown


let input = document.querySelector('input');

input.addEventListener("keydown",(dugme)=>{


    console.log(dugme.key);
})

/* window.addEventListener("mousemove",(event)=>{

    console.log(`Mis je pomeran ${event} puta`);

 })*/
 input.addEventListener("mousemove",(event)=>{

    console.log(`Mis je pomeran u inputu ${event} puta`);
    
     })