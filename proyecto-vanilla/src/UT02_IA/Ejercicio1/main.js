"use strict";
import{ compararEdades ,pruebaArray}from "../biblioteca/biblioteca.js";

let edad1= 2;
let edad2= 5;
const resultadoEjercicio1 = compararEdades(edad1,edad2)
console.log(`Persona 1: ${edad1}\nPersona 2: ${edad2} \n${resultadoEjercicio1} ` );

const resultadoPrueba= pruebaArray();
console.log(`REsultado es ${resultadoPrueba}`);