//Ejercicio1
"use strict";
import{calcularIMC, tieneIMCMayor, resultado1}from "../Biblioteca/biblioteca.js"


console.log("Ejercicio 1");
console.log(`¿Tiene Marcos un IMC mayor que el de Juan?: ${tieneIMCMayor(calcularIMC(70,180),calcularIMC(80,200))?"Juan es mas gordo":"Marcos es mas gordo"}`);

console.log("Ejercicio 2");