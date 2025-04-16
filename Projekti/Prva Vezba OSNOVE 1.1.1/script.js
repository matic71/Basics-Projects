console.log('Pisanje u konzoli');
console.log('------------------------------')




// Logicke funkcije
let a = 5;
let b = 10;
let c = a + b ;
console.log('Zbir brojeva A i B je ' + c );
console.log('------------------------------')




//If Funkcija 

let budzet = 500;
console.log('Budzet za pazarenje racunara je ' +  budzet  +  ' evra');

let mis = 30;
let tastura = 50;
let kucistesakomponentima = 300; 
let monitor = 300;

let racunar = mis + tastura + kucistesakomponentima + monitor ; 

console.log('Racunar je: '  + racunar  +  'evra');

if (racunar>budzet){

    console.log( 'Nemam dovoljno novca jer je cena racunara '  + racunar +  ' evra' );

}
else {

    console.log( 'Imam dovoljno novca jer je cena racunara' + racunar + ' evra' );

}
console.log('------------------------------')





//Petlje 

let flasavodelitar = 5;
let brojflasa = 30;
let ukupnolitara = 0;


while(ukupnolitara<brojflasa){

    ukupnolitara++;
}

console.log('Ukupno ima ' + ukupnolitara * brojflasa + ' litara');
console.log('------------------------------')


//Petlje + Niz na TEZI NACIN

let obicanniz = [1,2,3,4,5,6,7,8,9]
let brojclanova = obicanniz.length;
let vrednostclanova=0;



console.log('Ovaj niz ima ' + brojclanova + ' clanova');



while ( vrednostclanova < brojclanova )
    
{
   console.log(`Na mestu ${[vrednostclanova]} nalazi se broj: ${obicanniz[vrednostclanova]}`); 
   console.log('break')
   
   vrednostclanova++;

}
console.log('------------------------------')


//Petlje + Niz na Jednostavniji nacin 

console.log('LAKSI NACIN ')

for (let clan in obicanniz){
    console.log(obicanniz[clan]);
    vrednostclanova+=obicanniz[clan]
}
console.log (`Ukupna vrednost svih clanova je : ${vrednostclanova}`)
console.log('------------------------------')

//Petlje + Objekti 

let telefoni = {

    Iphone: ['16gb','2006','ios'],
    Samsung: ['32gb','2004','android'],
    Nokia: ['2gb','2000','android'], 
    Laptop: ['1tb','1981','windows'],
}

for (telefon in telefoni){

let naziv = telefon ;
let podaci = telefoni[telefon];

console.log(`Naziv uredjaja je ${telefon} 
            memorija je ${podaci[0]} 
            godina proizvodnje je ${podaci[1]}  
            operativni sistem je ${podaci[2]} `)
}
console.log('------------------------------')


// Funkcije 


let oprema = 
{
 
    IPAD:  5000,
 
    EARPODS:  6000,
 
    MACBOOK: 20000,
}
function racunanje_mesecne_rate(godina,vrstaopreme){

    let mesec = godina * 12;
    let rata =  oprema[vrstaopreme] / mesec;
    rata = rata.toFixed(2);
    console.log(`Za vas ${vrstaopreme} mesecna rata iznosi ${rata} na ${mesec} meseci`);
}

racunanje_mesecne_rate(5,'IPAD');
racunanje_mesecne_rate(5,'MACBOOK');
racunanje_mesecne_rate(5,'EARPODS');



const x = {a: 1};
const y = x;

x.a = 2;

console.log(x);
console.log(y);