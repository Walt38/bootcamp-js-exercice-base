/**
 * Écrire une fonction `safeDivide` qui prend deux nombres en entrée et retourne le résultat de leur division. Si le deuxième nombre est 0, la fonction doit retourner `"Erreur : Division par zéro"`.
 * Rappel : La division par zéro est indéfinie en mathématiques et en programmation, elle produit une erreur ou une valeur infinie.
 **/


function safeDivide(a, b) {

    if (b === 0){
        return "Erreur : Division par zéro";
    }

    else {
        return a / b;
    }
}

// Exemple d'utilisation
console.log(safeDivide(10, 2));
console.log(safeDivide(10, 0)); // 5
console.log(safeDivide(10, -1)); // "Erreur : Division par zéro"//