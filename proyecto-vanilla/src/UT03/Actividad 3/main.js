"use strict"
import{mostrarObjeto,imprimirInforme,imprimirAficiones,calacularMedia} from "../bibilioteca/biblioteca03.js"
console.log(`Ejercicio 1:`);
 const curso = {

    curso: "aquí el nombre del curso",

    año: 2026,

    descripcion: "aquí la descripción del curso",

    alumnos: [], // array vacío con los alumnos del curso.

  };
mostrarObjeto(curso)


let distente ={
  id: 1,
  nombre: "Pepe",
  apellidos: "Gonzalo",
  aficiones: ["Correr", "ir al gimnasio"],
  notas: {
    primera: 4.97,
    segunda: 1,
    tercera: 8
  }


};

console.log(`EJERCICIO 2`)

imprimirInforme(distente);
imprimirAficiones(distente.aficiones);
console.log(`La media es de : ${calacularMedia(distente.notas.primera,distente.notas.segunda,distente.notas.tercera)}`);
