/** Exo 1 Robot musée **/


function Prix(Age) {

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
console.log(Prix(20));
console.log(Prix(11));
console.log(Prix(4));