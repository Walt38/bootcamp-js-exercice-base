/**
 * Consigne : Écrire une fonction `fibonacci` qui prend un nombre `n` en entrée et retourne le `n`-ième nombre de la séquence de Fibonacci.
 *
 * Rappel :  La séquence de Fibonacci est une suite de nombres où chaque nombre est la somme des deux précédents, commençant par 0 et 1. Les premiers termes de la séquence sont 0, 1, 1, 2, 3, 5, 8, etc.
 **/

function fibonacci(n) {

}


function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

const n = 10;

// Exemple d'utilisation
console.log(fibonacci(5)); // 5
console.log(fibonacci(10)); // 55
