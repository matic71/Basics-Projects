function dodavanjediva(){

    let novi_element = document.createElement('div') ;
    let recenica = document.getElementById('pisanje').value; 
    let novi_button = document.createElement('button');    

    
    
    
    
    
    novi_element.classList = 'novidiv';
    novi_element.innerText = recenica;



    novi_button.classList = 'novibutton';
    novi_button.innerText = 'x';
    


    novi_button.onclick = function(){
        novi_element.remove();
        novi_button.remove();
    };

       
    
    let glavni_div = document.querySelector('#ToDoList');
    glavni_div.appendChild(novi_element);
    glavni_div.appendChild(novi_button);

}