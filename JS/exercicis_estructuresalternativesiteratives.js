//13.1.- Escriu un programa que donat un número llegit amb prompt escrigui el missatge “elnúmero llegit és negatiu” si el número és més petit que zero.
// let num = prompt("Introdueix un número:");
// if (num < 0) {
//     console.log("El número llegit és negatiu");
// }

// 13.2.- Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el número llegit és parell” si el número es parell
// let numero = parseInt(prompt("Introdueix un altre número:"));
// if (numero % 2 === 0) {
//     console.log("El número llegit és parell");
// }

// 13.3.- Escriu un programa que, donat un número llegit amb prompt, escrigui “el número llegit és parell” si el número es parell, o “el número llegit és senar”, si és senar. Fes servir un if per cada cas.
// let number = parseInt(prompt("Introdueix un número:"));

// if (number%2==0) {
//   console.log("el número llegit és parell")} 

//   if (number%2!=0) {
//   console.log("el número llegit és senar");} ç

// 13.4.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola el més gran de tots dos. Pista: fes servir dos if un per comprovar si el primer número és més gran que el segon i l’altre per comprovar si el segon número és més gran que el primer.

// let num1 = parseInt(prompt("Introdueix el primer número:"));
// let num2 = parseInt(prompt("Introdueix el segon número:"));

// if (num1 > num2) {
//     console.log("El primer número és més gran.");
// } else if (num2 > num1) {
//     console.log("El segon número és més gran.");
// } else {
//     console.log("Els dos números són iguals.");
// }

// 13.5.- Escriu un programa que, donat tres número llegits amb prompt, escrigui a la consola
// el més gran dels tres. Pista: fes servir tres if cadascun d’ells per comprovar si un dels
// números és el més gran. 
// let num1 = parseInt(prompt("Introdueix el primer número:"));
// let num2 = parseInt(prompt("Introdueix el segon número:"));
// let num3 = parseInt(prompt("Introdueix el tercer número:"));
// if (num1 >= num2 && num1 >= num3) {
//     console.log("El número més gran és el primer: " + num1);
// }

// // Comprovem si el num2 és el més gran (o igual als altres)
// if (num2 >= num1 && num2 >= num3) {
//     console.log("El número més gran és el segon: " + num2);
// }

// // Comprovem si el num3 és el més gran (o igual als altres)
// if (num3 >= num1 && num3 >= num2) {
//     console.log("El número més gran és el tercer: " + num3);
// }

// 13.6.- Fent servir només if, escriure un programa que donat amb prompt un número de mes,entre 1 i 12, escrigui per pantalla el nom del mes que correspon.
let mes = parseInt(prompt("Introdueix el número del mes (1-12):"));
if (mes === 1) {
    console.log("El mes és gener.");
} else if (mes === 2) {
    console.log("El mes és febrer.");
} else if (mes === 3) {
    console.log("El mes és març.");
} else if (mes === 4) {
    console.log("El mes és abril.");
} else if (mes === 5) {
    console.log("El mes és maig.");
} else if (mes === 6) {
    console.log("El mes és juny.");
} else if (mes === 7) {
    console.log("El mes és juliol.");
} else if (mes === 8) {
    console.log("El mes és agost.");
} else if (mes === 9) {
    console.log("El mes és setembre.");
} else if (mes === 10) {
    console.log("El mes és octubre.");
} else if (mes === 11) {
    console.log("El mes és novembre.");
} else if (mes === 12) {
    console.log("El mes és desembre.");
} else {
    console.log("Número de mes no vàlid. Si us plau, introdueix un número entre 1 i 12.");
}
