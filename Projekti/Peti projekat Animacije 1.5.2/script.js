let texttag = document.querySelector('.section1 h1')
let word = texttag.innerText;

let text = word.split('');

texttag.innerHTML = '';

for (let i=0; i < text.length; i++) {

texttag.innerHTML += `<span>${text[i]}<span>` ;

}
k = 0;
texttag.addEventListener('click',function event(){

    let interval = setInterval(()=>{

        let spans = document.querySelectorAll('span');
        
        
        let Singlespan = spans[k];
        Singlespan.className = 'animation';
        k++;
        
        if (k === spans.length ){
        
        clearInterval(interval);
        
        }
        
        },100)
        
        texttag.removeEventListener('click',event );
})


let animationwidth = 0 ; 
window.addEventListener('keydown',(event)=>{


    let border = document.querySelector('.border-line');
    let key = event.keyCode ; 
    





    if (key===107){

        animationwidth += 1   ;
    }



    if (key===109){

        animationwidth -= 1   ;
    }
    
   else if (animationwidth>100){

        animationwidth = 100;

    }
    if (animationwidth<1){

        animationwidth = 1;

    }

    border.style.width = animationwidth + '%'

    

})




leftslider = document.querySelector('.leftslide')
leftslider.addEventListener('click',()=>{


    let slideFromLeft = document.querySelector('.slideFromLeft');

    slideFromLeft.classList.add ('animated');



})
rightslider = document.querySelector('.rightslide')
rightslider.addEventListener('click',()=>{


    let slideFromRight = document.querySelector('.slideFromRight');

    slideFromRight.classList.add ('animated');

})