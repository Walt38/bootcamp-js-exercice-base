/**
 * Écrire une fonction `countOccurrences` qui prend une chaîne de caractères et un caractère en entrée et retourne le nombre de fois que le caractère apparaît dans la chaîne.
 * Une occurrence est le nombre de fois qu'un certain caractère apparaît dans une chaîne de caractères.
 **/

function countOccurrences(str, char) {

//parcourir la chaine (boucle)

    let count = 0;                              // declaration du compteur à 0
    let Lowerstr = str.toLowerCase();           // Mettre str en minuscule
    let Lowerchar = char.toLowerCase();         // Mettre char en minuscule

    for(let i=0 ;i < Lowerstr.length; i++){     // Declare i egale 0 ; si i est plus petit que la chaine de charactere on incremente de 1
        if (Lowerstr[i] === Lowerchar){         // si str de i est strictement egale à char on incremente count de 1
            count +=1;                          // incremente de 1 à chaque fois que [i] est trouvé
        }

    }
//compteur de caracter match
return count;                                   // afficher le resultat
}

// Exemple d'utilisation
console.log(countOccurrences("hello world", "o")); // 2
console.log(countOccurrences("hello world", "O")); // 2
console.log(countOccurrences("javascript", "a")); // 2
console.log(countOccurrences("javascript", "J")); // 1
console.log(countOccurrences("javascript", "y")); // 0