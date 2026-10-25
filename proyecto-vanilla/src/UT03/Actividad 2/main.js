"use strict"
import {primoPolindromo,temporizador,fechaActual,toCani,solicitarDNI,masDNI} from "../bibilioteca/biblioteca03.js";

let texto ="una cadena cani es como esta";
const resutadoEjercicio1 = toCani(texto);
console.log(`Ejercicio 1`)
console.log(`El texto transformado a cani es: ${resutadoEjercicio1}`);


//Ejercicio 3

console.log(`Ejercicio 3`)
solicitarDNI();



//Ejercicio 4

const resultado4 =setTimeout(fechaActual,3000);// Ejecuta solo UNA VEZ  transcurrido los 3  segundos setTimeout
console.log(`El resutado del ejercicio 4 \n Hoy es ${resultado4}`);

//Ejercicio 5
console.log(`Ejercicio 5`)

masDNI("A")

//Ejercicio 2
console.log(`Ejercicio 2`)
temporizador(0,1)


//Ejercicio 6

console.log(`Los numeros que son primos y polidromos son :${primoPolindromo()}`)