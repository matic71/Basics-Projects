window.addEventListener("keydown",(event)=>{



    
let code = event.keyCode ;



let audio = document.querySelector(`audio[data-key="${code}"]`);

let keyCode = document.querySelector(`div[data-key="${code}"]`);


if(!keyCode)  return ;
   


audio.currentTime = 0 ;
audio.play();


})