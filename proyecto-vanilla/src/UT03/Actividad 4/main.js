"use strict"
import {generarNumerosAleatoriosArray,añadirCodigo,añadirApellidos,condiciones3,sinDatos,correoYahoo,mayorEdad,añadirUsuario} from "../bibilioteca/biblioteca03.js"

console.log("Ejercicio 1")

const nombresPropios = ["Juan", "Pepe","Jose", "Ana","Maria"]
console.log(nombresPropios.map((v,i,array)=>{
    return v.toUpperCase();
}))

console.log(nombresPropios.toSorted((a,b)=>b.localeCompare(a)))

let nuevoArray = nombresPropios.map((v,i,array)=>{
    return {
        id : i +1,
        nombre: v 
    }
})
console.log(nuevoArray)

console.log("Ejercicio 2")

let arrayAleatorio1 = generarNumerosAleatoriosArray()
let arrayAleatorio2 = generarNumerosAleatoriosArray()
let arrayAleatorio3 = generarNumerosAleatoriosArray()
console.log(arrayAleatorio1,arrayAleatorio2,arrayAleatorio3)
let arrayMayor5= []
arrayMayor5=[arrayAleatorio1.filter((v)=>{return v > 5})
    ,arrayAleatorio2.filter((v)=>{return v > 5})
    ,arrayAleatorio3.filter((v)=>{return v > 5})]

console.log(`Los numeros mayores a 5 en los tres arrays son ${arrayMayor5}`)
console.log(arrayMayor5)

const usuarios = [
  {
    nombre: "Luis",
    preferencias: { tema: "oscuro", idioma: "espaÃ±ol", edad: 25 },
    contacto: {
      direccion: {
        calle: "Calle falsa, 666",
        localidad: "Elda",
        pais: "EspaÃ±a",
      },
      correoelectronico: "correofalso@yahoo.com",
      telefono: "123456789",
    },
  },
  {
    nombre: "Marta",
    preferencias: { tema: "claro", idioma: "catalÃ¡n", edad: 15 },
    contacto: {
      direccion: {
        calle: "Calle tambiÃ©n falsa, 123",
        localidad: "Andorra la Vella",
        pais: "Andorra",
      },
      correoelectronico: "correoandorrano@gmail.com",
      telefono: "",
    },
  },
  {
    nombre: "Alberto",
    preferencias: { tema: "oscuro", idioma: "espaÃ±ol", edad: 56 },
    contacto: {
      direccion: {
        calle: "Elm Street, 666",
        localidad: "Petrer",
        pais: "EspaÃ±a",
      },
      correoelectronico: "correonulo@yahoo.com",
      telefono: "548632478",
    },
  },
  {
    nombre: "Jacinto",
    preferencias: { tema: "claro", idioma: "inglÃ©s", edad: 17 },
    contacto: {
      direccion: {
        calle: "Elm Street, 667",
        localidad: "Elda",
        pais: "EspaÃ±a",
      },
      correoelectronico: "correofalso@gmail.com",
      telefono: "",
    },
  },
  {
    nombre: "Rigoberta",
    preferencias: { tema: "claro", idioma: "francÃ©s", edad: 34 },
    contacto: {
      direccion: {
        calle: "Calle inexistente, 6",
        localidad: "Burdeos",
        pais: "Francia",
      },
      correoelectronico: "correofalso@gmail.com",
      telefono: "232547859",
    },
  },
  {
    nombre: "Sandra",
    preferencias: { tema: "oscuro", idioma: "espaÃ±ol", edad: 18 },
    contacto: {
      direccion: {
        calle: "Calle de mentira, s/n",
        localidad: "Petrer",
        pais: "EspaÃ±a",
      },
      correoelectronico: "estecorreonoexiste@gmail.com",
      telefono: "452158697",
    },
  },
  {
    nombre: "Sandra",
    preferencias: { tema: "oscuro", idioma: "espaÃ±ol", edad: 18 },
    contacto: {
      direccion: {
        calle: "Calle existente, 34",
        localidad: "Petrer",
        pais: "EspaÃ±a",
      },
      correoelectronico: "correoinexistente@yahoo.com",
      telefono: "",
    },
  },
];
/*
const mayorEdad =()=>{

if(Array.isArray()){
        return usuarios.filter((a)=> { return a.preferencias.edad >=18 })

    }else{
        return "No es un array"
    }

}
*/
/*
const correoYahoo =()=>{

        return usuarios.filter((a)=> { return a.contacto.correoelectronico.includes("yahoo")  })



}

*/
/*
const condiciones3 =(usuarios)=>{

if(Array.isArray(usuarios)){
        return usuarios.filter((a)=> {  
            return a.preferencias.tema === "claro"
                 && a.preferencias.edad >= 18
                && a.contacto.direccion.pais ==="EspaÃ±a"
                
            })
              
        }else{
        return "No es un array"
    }

}
*/
/*
const condiciones3 =(usuarios)=>{

if(Array.isArray(usuarios)){
        return usuarios.filter((a)=> {  
            return a.preferencias.tema === "claro"
                 && a.preferencias.edad >= 18
                && a.contacto.direccion.pais ==="EspaÃ±a"
                
            })
              
        }else{
        return "No es un array"
    }

}

*/

console.log("Ejercicio 3");

// 1. Añadir un usuario
console.log("Añadir usuario:");
const usuariosNuevos =añadirUsuario(usuarios, {
    nombre: "Pedro",
    preferencias: {
        tema: "claro",
        idioma: "español",
        edad: 30
    },
    contacto: {
        direccion: {
            calle: "Calle de prueba, 1",
            localidad: "Elda",
            pais: "España"
        },
        correoelectronico: "pedro@gmail.com",
        telefono: "123456789"
    }
});
console.log(usuariosNuevos);
// 2. Usuarios mayores de edad
console.log("Usuarios mayores de edad:");
console.log(mayorEdad(usuarios));

// 3. Usuarios con correo Yahoo
console.log("Usuarios con correo Yahoo:");
console.log(correoYahoo(usuarios));

// 4. Usuarios con tema claro, mayores de edad y de España
console.log("Usuarios que cumplen las tres condiciones:");
console.log(condiciones3(usuarios));

// 5. Usuarios a los que les faltan datos
console.log("Usuarios sin algún dato:");
console.log(sinDatos(usuarios));

// 6. Añadir apellidos por defecto
console.log("Usuarios con apellidos:");
console.log(añadirApellidos(usuarios));

// 7. Añadir código postal por defecto
console.log("Usuarios con código:");
console.log(añadirCodigo(usuarios));