"use strict";
//Ejercicio1



const validarNumeros = (...numeros) =>{
    if(Array.isArray(numeros)){
        return numeros.every((n,i,array)=>{
            return typeof n === "number" ;

        });

    }


}

const sumandoParametros = (...numeros) =>{
    let resultado = 0;
    if(validarNumeros(numeros)){
        return numeros.reduce((acumulador, n, indice, array)=>{
            return acumulador += n ;  
    })
    }else{
        return "Error no hay numeros";
    }

};


const multiplicarSimple = ((num1, num2)=>{
    return num1 * num2;
})

 const tablas = ((num, multiplicarSimple)=>{
    if(validarNumeros(num)){
        if(num >= 2 ){
            let i = 0;
            let resultado = "";
            for(i=0;i <= 10; i++ ){
               resultado += `${i} * ${num1} = ${multiplicarSimple(num,i)}\n`
            }
            return resultado;


        }
    }

 })

















export{sumandoParametros,multiplicarSimple};