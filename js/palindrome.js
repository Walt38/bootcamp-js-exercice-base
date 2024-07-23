/**
 * Consigne : Écrire une fonction `isPalindrome` qui prend une chaîne de caractères en entrée et retourne `true` si la chaîne est un palindrome et `false` sinon.
 * Rappel :  Un palindrome est une chaîne de caractères qui se lit de la même façon de gauche à droite et de droite à gauche (par exemple "radar", "level").
 **/


function isPalindrome(str) {


    // comparer la premiere lettre avec la derniere
    //creer une boucle qui va comparer la lettre +1 avec -1


    let debut = 0;
    let fin = str.length - 1;

    while (debut < fin) {

        if (str.length[debut] !== str.length[fin]) {
            return false;
        }
        debut++;
        fin--;
    }

    return true;

}

// Exemple d'utilisation
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("javascript")); // false
console.log(isPalindrome("javasvajas")); // false