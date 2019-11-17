/**
 * Exercice 1 :
 * Écrire un code qui affiche en fonction de l’âge, majeur ou mineur.
 */
const age = +prompt('ton age?');

if (prompt('ton age ?') >= 18){
    alert('majeur')
} else if (age <18){
    alert('mineur');
}else{
    alert('heu');

}
/**
 * Exercice 2 :
 * Ecrire un code qui affiche en fonction de l’heure (entre 0 et 24) : Bon réveil (entre 0 et 8), Bonjour (entre 8 et 17),
 * Bonsoir (entre 17 et 22) et Bonne nuit (entre 22 et 8) et par défaut il affichera  Heuu.
 */
const hour = +prompt('ton heure?');

    if(hour >= 0 && hour  <=8){
        alert('bon reveil');
}else if (hour >8 && hour <=17){
        alert('Bonjour');
}else if (hour >17 && hour  <=22){
    alert('Bonsoir');
}else if (hour >22 && hour  <=8){
    alert('Bonne nuit');
}else{
        alert('heuuuu');
    }
/**
 * Exercice 3 :
 * Même que exercice 1, mais utilisé les conditions ternaires
 */

const age = +prompt('ton age ?') >=18 ? alert('majeur') : alert('mineur');
alert(+prompt('ton age ?') >=18 ? 'majeur' : 'mineur');