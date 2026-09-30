"use strict";
//Ejercicio1

const sumandoParametros = (...numeros) =>{
    let array = [numeros];
   let suma = array.reduce((n,indice,array)=>{
        return n + indice;
    })
    return suma;
};