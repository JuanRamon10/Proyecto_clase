"use strict";
import{sumandoParametros,tablas,multiplicarSimple, calcularPropina,sumadoVectores,imprimirArray,calcular,arrayRandom} from "../bibilioteca/biblioteca03.js";

//Ejercicio 1
console.log("Ejercicio 1");
console.log(`El resultado es :${sumandoParametros(2,2)}` );

const resultado2 = tablas(5,multiplicarSimple);

console.log("Ejercicio 2")
console.log(`El resultado es: \n `)
tablas(5,multiplicarSimple);

let facturas = [124, 48, 268]
calcularPropina(facturas);
console.log(`Ejercicio4`)
calcular(arrayRandom,sumadoVectores, imprimirArray)

