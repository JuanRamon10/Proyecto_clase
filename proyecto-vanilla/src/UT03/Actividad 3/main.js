"use strict"
import{mostrarObjeto,mostradorObjetos2} from "../bibilioteca/biblioteca03.js"
console.log(`Ejercicio 1:`);
 const curso = {

    curso: "aquí el nombre del curso",

    año: 2026,

    descripcion: "aquí la descripción del curso",

    alumnos: [], // array vacío con los alumnos del curso.

    matricular: function(discente){
      this.alumnos = [...this.alumnos, discente]
    }
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
      calcularMedia: function() {
        let suma= 0;
        let contador = 0;
          
        for(let claves in this.notas){
            suma += this.notas[claves]
            contador++;
        }
        return contador !== 0 ? suma / contador : `Error, no se puede dividir entre 0` 

      },
      imprimirAficiones: function(){

        return this.aficiones.map((v, i, array)=>{
            console.log(`Sus aficiones son: ${v}`)
        })
      },
      imprimirInforme: function(){  
        for(let clave in this){

          if(typeof this[clave] !== "object" && !Array.isArray(this[clave]) && typeof this[clave] !== "function"){
            console.log(`${clave} - ${this[clave]}`)
          }
          if(typeof this[clave] === "object" && Array.isArray(this[clave])){
              this.imprimirAficiones();
          }

          if(typeof this[clave] === "object" && !Array.isArray(this[clave]) && clave ==="notas"){
            console.log(`${clave}: `)
            for(let orden in this.notas){
              console.log(`${orden} : ${this.notas[orden]}`)
            }
          }
          if( clave === "calcularMedia"){
            
            console.log(`La media de la nota es : ${this.calcularMedia().toFixed(2)}`)
            console.log(`Funcion ${clave}: Cumplido `)
            }          

          if(typeof this[clave] === "function" && clave === "imprimirAficiones"){
            console.log(`Funcion ${clave}: Cumplido `)
            
            }
          if(typeof this[clave] === "function" && clave === "imprimirInforme"){
            console.log(`Funcion ${clave}: Cumplido `)
            
            } 
            
          }



 
      }

    }


console.log(`EJERCICIO 2`)
distente.imprimirInforme();


console.log(`EJERCICIO 4`)
mostradorObjetos2(distente);



//imprimirInforme(distente);
//imprimirAficiones(distente.aficiones);
//console.log(`La media es de : ${calacularMedia(distente.notas.primera,distente.notas.segunda,distente.notas.tercera)}`);
