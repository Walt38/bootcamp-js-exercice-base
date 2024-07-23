/**
*
* Nous sommes un musée, nous avons un robot qui doit demander l'age des visiteurs 
* afin de leur donner le prix de leurs billets.
* 
* Prix adulte: 12 € => age adulte > 12 ans.
* Prix enfant: 6 € => age enfant est entre 12 ans (compris) et 5 ans (compris) => 12 >= age >= 5
* Prix bambin: gratuit => age < 5 ans 
*
*/

/**
 * 
 * Je demande l'age du visiteur 
 * Je compare son age avec les tranches d'ages préalablement définies
 * 
 * age_visiteur
 * 
 * Si age_visiteur est plus grand que 12 ans
 *      alors je lui réponds que le prix du billet est de 12 €
 * Sinon si age_visiteur est égal ou plus petit que 12 ans ET que age_visiteur est plus grand ou égal à 5 ans
 *      alors je lui réponds que le prix du billet est de 6 €
 * Sinon 
 *      alors je lui réponds que le prix du billet est gratuit.
 * 
 * Synthétitation de la pensée
 * 
 * Si age_visiteur > 12 
 *      alors prix_billet = 12 €
 * Sinon Si age_visiteur <= 12 ET age_visiteur >= 5 
 *      alors prix_billet = 6 €
 * Sinon
 *      alors prix_billet = 0 €
 * 
 */

//Les variables: ce sont des boîtes qui stokent des valeurs
//Les variables sont utiles car elles permettent d'avoir un système réutilisable

//Les conventions d'écriture des variables en JS sont:
/**
* - Le fait de les écrire en anglais
* - Donner des noms pertinent à ce qu'elles contiennent
* - Les écrire en camelCase ( c'est une convention d'écriture)
* - Les autres casses sont:
*       en CSS par exemple c'est le train-case
*       en php par exemple c'est le snake_case
*       le camelCase
*       le PascalCase
*/

//Je viens d'instancier (créer) et d'assigner une valeur à ma variable

//let ageVisiteur1 ;
//ageVisiteur1 = 32 ;

        //let ageVisiteur = parseInt(prompt("Quel est votre age ?")) ; // Ici, prompt renvoie une string, je veux donc transformer cette chaîne en nombre

        //console.log(typeof ageVisiteur) ; //opérateur permettant de vérifier le type d'une variable

        //let ageAdulte = 12 ;
        //let ageEnfant = 5 ;

        //let promo = 0 ;
        //let prixAdult = 12 ;
        //let prixEnfant = prixAdult/2 ;


/**
* En JS, il existe plusieurs type de valeurs :
* Les types primitifs :
* - number: 32 15 205
* - string (chaîne de caractères) : " ma première chaîne ", ' ma seconde chaîne '
* - boolean : true ou false
* - ainsi que d'autres types plus avancés ...
*/


//Je veux comparer ce nombre : j'ai donc besoin de pouvoir faire des conditions

//Si => if, Sinon, Si, Sinon (else)

//pour faire des conditions, on utilise des opérateurs de comparaison : < > <= >= == === != !==
//des opérateurs logiques : ET &&, OU ||

        //console.log(ageVisiteur > 12) //ma condition me renvoi un booléen soit true soit false (ici c'est true)

        //Vérifie la véracité de la condition
        //if(ageVisiteur > 12){
            //Ici, le code s'execute dans le cas vrai
            //alert('le prix du billet est de '+ prixAdult +' €')
        //} else if(ageVisiteur <= 12 && ageVisiteur >= 5 ){
            //alert('le prix du billet est de '+ prixEnfant +'€')
        //} else {
            //alert('le billet est gratuit')
        //}

/**
 * exo 2 : La moyenne de la classe
 * Je souhaite une fonction permettant de récupérer des notes sur 100 via un prompt 
 * et de renvoyer la moyenne de toute ces notes sur 20
 * - l'utilisateur doit pouvoir rentrer autant de note qu'il le souhaitent et lorsqu'il décide de 
 * s'arréter on calcul la moyenne et lui renvoi
 *
 * Résumé de la demande :
 * - entrés user via prompt => notes sur 100
 * - controle de répétition de saisi
 * - sortie moyenne des notes sur 20
 *
 * demander plusieurs fois des notes à l'user => je dois répéter la demande => je dois donc faire une boucle
 * et enregistrer plusieurs notes => stocker plusieurs valeurs => Array
 */

/**
 * exo 2 : Le cryptage :
 * à partir d'une table de cryptage de voyelle (un tableau qui représente les correspondance que vous voulez)
 * crypter toute les voyelles d'une chaine rentré via le prompt. Renvoyer la même chaine via alert en crypté
*/


/**
 * exo 3: Le retour de la somme :
 * faite une fonction qui retourne sous forme de string la somme de tous les nombres fournit via une unique chaine de caractère
 * exemple : '526382' => '26' => '8' 
 * 
 * //je peux travailler directement avec la chaine
 * //je peux travailler à l'aide des tableaux
 */


/**
 * exo 4 : le palyndrome :
 * faire une fonction qui nous indique si le mot est un palyndrome ou non, exemple : kayak est un palyndrome
 *
 * 1- Créer la fonction.
 * 2- Faire un "retournement" des lettres.
 * 3- Savoir si le retournement est égale a la valeur initiale.
*/

/**
 * exo 5 : Le caractère du milieu :
 * renvoyer le caractère du milieu d'une chaine si elle est impair les deux du milieu si elle est paire
 */

/**
 * exo 6 : La plus petite distance :
 * trouver dans un tableau la plus petite différence entre deux nombre qui se suivent
 * exemple: [10,15,25,45,42] => 3 distance entre 42 et 45
 */

/**
 * exo 7 : retourner l'extension d'un fichier passer via le prompt
 * exemple: je rentre dans le prompt ceci : fichier.jpg => jpg
 */

/**
 * exo 8 : faire une fonction qui renvoie le produit de tous les entiers impairs d'un tableau
 * exemple : ["25",5,2.4,9,10] => 45 l'algo doit ignorer les nombre à virgule et les string, si pas de chiffre impair => 0
 */

/**
 * exo 9 : le retour des notes :
 * - créer une fonction capable de récupérer la note max
 * - puis une pour la moyenne
 * - une autre pour trouver le nombre de notes situé entre un interval donné
//  * exempel : [10,15,12,18] => 1- 18 , 2- 13.75, 3- interval (9,13) => le nb de notes situé entre 9 et 13 est 2
 */

/**
 * exo 10 : faire un tableau de conversion nous permettant de récupérer le nom d'un mois en fonction de son numéro
 */