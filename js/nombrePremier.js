
/**
 * Écrire une fonction `isPrime` qui prend un nombre en entrée et retourne `true` si le nombre est un nombre premier et `false` sinon.
 * Un nombre premier est un nombre entier supérieur à 1 qui n'a pas d'autres diviseurs que 1 et lui-même (par exemple 2, 3, 5, 7).
**/


function isPrime(number) {

    for(let i = 2; i < number; i++)
        if(number%i === 0) 
        return false;
        else{
            number >1
        return true;
        }
}

// Exemple d'utilisation
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
