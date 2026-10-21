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
      },
      calcularMedia: () =>{
        let suma= 0;
        let contador = 0;
        for(let claves in propiedades){
            suma += propiedades[claves]
            contador++;
        }
        return suma / contador  

      },
      imprimirAficiones: function(){

        return this.aficiones.map((v, i, array)=>{
            console.log(`Sus aficiones son: ${v}`)
        })
      },
      imprimirInforme: function(){  
        
      }


};

console.log(distente.nombre);
console.log(`EJERCICIO 2`)
console.log(distente.imprimirInforme());



//imprimirInforme(distente);
//imprimirAficiones(distente.aficiones);
//console.log(`La media es de : ${calacularMedia(distente.notas.primera,distente.notas.segunda,distente.notas.tercera)}`);
