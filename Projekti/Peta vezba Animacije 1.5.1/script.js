let texttag = document.querySelector('.section h1');
let text = texttag.textContent;
let splittedtext = text.split('');


texttag.innerHTML = '';

for (let i=0; i < splittedtext.length; i++) {

texttag.innerHTML += `<span>${splittedtext[i]}<span>` ;

}
k = 0;
let interval = setInterval(()=>{


let spans = document.querySelectorAll('span');

let Singlespan = spans[k];

Singlespan.className = 'animation';
k++;

if (k===spans.length){


clearInterval(interval);

}



},100)




let border = document.querySelector('.border-line');
let animationwidth = 0 ;
window.onscroll = () => {


    if (this.oldScroll>this.scrollY){
        animationwidth -= 1;
        
        }
        else{
            animationwidth +=1;
        }
        






if (animationwidth>=100){
    animationwidth = 1;
}
if (animationwidth<=0){
    animationwidth = 0;
}

 
    border.style.width = animationwidth + '%' ;


    imganimation()

    }  


const imganimation = () => {



    let sectionforanimation = document.querySelector('.section2 img')
    let sectionposition = sectionforanimation.getBoundingClientRect().top;
    let windowposition = window.innerHeight / 1.3;






    let slidefromleft = document.querySelector('.slideFromLeft');
    let slidefromright = document.querySelector('.slideFromRight');
    
    if (sectionposition < windowposition){

        slidefromleft.classList.add ('animated');
        slidefromright.classList.add  ('animated');
     }
}




