totalprice = 0; 

function WatchMovie(movies){


let allmovies = movies.closest('.movie');
console.log(allmovies);

let price = allmovies.querySelector('.price').innerText;
price = price.substring(1);
price = parseInt(price);

totalprice+=price;



let total = document.querySelector('.total');

total.innerHTML = `<h3 class = "TotalPrice">Total Price: $${totalprice}</h3> `;

movies.innerText = 'Odgledano';
movies.setAttribute('disabled','true');



allmovies.setAttribute('style','background-color:#808000;')
}