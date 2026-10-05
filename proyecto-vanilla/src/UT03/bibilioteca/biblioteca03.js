"use strict";
//Ejercicio1

const sumandoParametros = (...numeros) =>{
    let resultado = 0;
    if(numeros.length>=2){

        if(comprobarNumerico(numeros)){

            resultado= numeros.reduce((acumulado,valor,indice, array)=>{
                return acumulado += valor;
            })
            return resultado;
        }else{
            resultado = `Error algo a salido mal`;
        }
    
   
    }else{
        resultado ="SE NECESITA MINIMO DOS PARAMETROS"
       
    } 
    return resultado;
};

const comprobarNumerico = (elemento)=> {
    if(Array.isArray(elemento)){

        return elemento.every((valor, indice, array)=>{
            return typeof valor === "number";
        })

    }else{
        return typeof elemento ==="number";
    }


}

//Ejercicio 2


const tablas=(num1,multiplicarSimple)=>{
    let i=0;
    if(comprobarNumerico(num1)){
        
    
        if(num1 > 2){
            while(num1 >= 2){
                    for(i=0;i <11 ; i++){
                        console.log(`${num1} * ${i} = ${multiplicarSimple(num1,i)}\n`)
                    }
                num1--
        }
    }else{
       return "ERROR NO HAS PUESTO UN NUMERO"
    }
    }
}
const multiplicarSimple= (num1,num2)=>{
    return num1*num2
}

/*
const tablas=(num1,multiplicarSimple)=>{
    let i=0;
    if(comprobarNumerico(num1)){
       let resultado= ""
    
        if(num1 > 2){
            while(num1 >= 2){
                    for(i=0;i <11 ; i++){
                        resultado +=`${num1} * ${i} = ${multiplicarSimple(num1,i)}\n`
                    }
                num1--
        }
        
    }else{
       return "ERROR NO HAS PUESTO UN NUMERO"
    }
    return resultado;
    }
}
const multiplicarSimple= (num1,num2)=>{
    return num1*num2
}
    */

//Ejercicio 3 

const calcularPropina=(...numeros)=>{
    let i =0;
    for(i=0;i<numeros.length;i++){

    }
    if(numeros[i]<50){

    }


}







export{sumandoParametros,tablas,multiplicarSimple};