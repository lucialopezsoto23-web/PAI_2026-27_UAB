// /*21.1.- Fes un programa que faci el següent:
// ● Defineix una variable de tipus taula, buida.
// ● Afegeixi el valor “Hola” a la posició 0.
// ● Afegeixi el valor “Adeu” a la posició 1.
// ● Escrigui a la consola el contingut de la taula.*/
// let taula = [];
// taula[0] = "Hola";
// taula[1] = "Adeu";
// console.log(taula);

// /*21.2.- Al programa anterior, afegeix les instruccions necessàries (després del console.log())
// per a fer el següent:
// ● Afegeixi el valor “Nom” a la posició 2 de la taula.
// ● Escrigui a la consola el contingut de la taula.
// ● Modifiqui el valor emmagatzemat a la posició 1 de la taula, guardant el valor “, “
// ● Escrigui a la consola el contingut de la taula.*/
// let taula = [];
// taula[0] = "Hola";
// taula[1] = "Adeu";
// console.log(taula);
// taula[2] = "Nom";
// console.log(taula);
// taula[1] = ", ";
// console.log(taula);

// /*21.3.- Fes un programa que faci el següent:
// ● Defineixi una variable de tipus taula, amb aquests elements [23,45,98,73].
// ● Escrigui a la consola la suma dels elements situats a les posicions 0 i 2 de la taula.
// ● Guardi a la posició 6 de la taula la suma dels elements
// ● Escrigui a la consola el contingut de la taula. Què passa a la posició 5?*/
// let taula = [23, 45, 98, 73];
// console.log(taula[0] + taula[2]);
// taula[6] = taula[0] + taula[2];
// console.log(taula);

// /*21.4.- Fes un programa que, donat un número (que demanarem per pantalla fent servir
// prompt()) emmagatzemi a una taula el doble i el triple d’aquest número. Un cop fet, escriu la
// taula a la consola.*/
// let numero = parseFloat(prompt("Introdueix un número:"));
// let taula = [numero * 2, numero * 3];
// console.log(taula);

// /*21.5.- Fes un programa que, donat dos números, que demanarem per pantalla i
// emmagatzemarem a dues variables, guardi a una taula els resultats de la suma, la resta, la
// multiplicació i la divisió dels dos valors introduïts.*/
// let num1 = parseFloat(prompt("Introdueix el primer número:"));
// let num2 = parseFloat(prompt("Introdueix el segon número:"));
// let taula = [num1 + num2, num1 - num2, num1 * num2, num1 / num2];
// console.log(taula);

// /*21.6.- Donada aquesta taula:
// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
// Fes un programa que escrigui a la consola els valors situats a la primera i la darrera posició
// de la taula.*/
// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
// console.log(taula[0], taula[taula.length - 1]);

// /* 21.7.- Fes un programa que escrigui a la consola tots els valors emmagatzemats a la
// taula, un a un*/
// for (let i = 0; i < taula.length; i++) {
//     console.log(taula[i]);
// }

/*21.8.- Fes un programa que escrigui a la consola la suma tots els valors
emmagatzemats a la taula.*/
let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
let suma = 0;
for (let i = 0; i < taula.length; i++) {
    suma += taula[i];
}
console.log(suma);
