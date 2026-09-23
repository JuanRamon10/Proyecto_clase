//Ejercicio1
"use strict";
import{calcularIMC, tieneIMCMayor,sacarMedia,compararParticipantes,ejercicio3, ejercicio4}from "../Biblioteca/biblioteca.js"


console.log("Ejercicio 1");
console.log(`¿Tiene Marcos un IMC mayor que el de Juan?: ${tieneIMCMayor(calcularIMC(70,180),calcularIMC(80,200))?"Juan es mas gordo":"Marcos es mas gordo"}`);

console.log("Ejercicio 2");
console.log( compararParticipantes(sacarMedia( 89, 120, 103),sacarMedia(116, 94, 123), sacarMedia(97, 134, 105) ));

console.log("Ejercicio 3");
console.log(ejercicio3(4,6));

console.log("Ejercicio 4");
console.log (ejercicio4());