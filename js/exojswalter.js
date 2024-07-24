/** Exo 1 Robot musée /** */

let userAge = parseInt(prompt("Quel est votre age ?")); //instancier un prompte pour entrer l'age
const Price = calculatePrice(userAge);

function calculatePrice(Age) {

//adulte(>=12)                  if
//enfant(=>5 & <12)             else if
//bambin(<5)                    else

if(Age>12){

    return ("le prix du billet est de 12 €");
}

else if(Age>=5 && Age<=12){

    return ("le prix du billet est de 6 €");
}

else{

    return ("le prix du billet est gratuit");
}
}
//console.log(Price(20));
//console.log(Price(11));
//console.log(Price(4));

console.log(calculatePrice(userAge)); //affichage console
alert(calculatePrice(userAge)); // affichage du prix dans une alert





/**Exo 2 : La moyenne de la classe */


function moyenne(){

let notes = []; //instancier la variable d' un tableau vide

}
//let notesInput = prompt("entrez votre note");

