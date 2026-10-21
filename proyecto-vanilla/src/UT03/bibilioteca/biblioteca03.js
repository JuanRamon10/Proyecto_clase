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

const calcularPropina=(numeros)=>{
    if(comprobarNumerico(numeros)){
        
    
        let arrayFactura= numeros;
        let arrayPropina= [];
        let arrayTotal= [];
        let i =0;

        for(i=0;i<numeros.length;i++){

            if(numeros[i]< 50){

                    arrayPropina[i]= numeros[i] * (20/100)
                    arrayPropina[i]= arrayPropina[i].toFixed(2);

            }else if(numeros[i] >= 50 && numeros[i] <= 200 ){
                    arrayPropina[i]= numeros[i] * (15/100)
                    arrayPropina[i]= arrayPropina[i].toFixed(2);
            }else if(numeros[i] > 200){
                    arrayPropina[i] = numeros[i] * (10/100)
                    arrayPropina[i] = arrayPropina[i].toFixed(2);
            }   


        }
        let c = 0 ;
        for(c=0;c<numeros.length;c++){
            arrayTotal[c]= numeros[c] + arrayPropina[c];
        }
        
        console.log(`Facturas: ${arrayFactura} `)
        console.log(`Propina: ${arrayPropina} `)
        console.log(`Total (Factura + Propina):${arrayTotal} `)
    }    

}


//Ejercicio 4 

const arrayRandom = (num) =>{
    let i = 0;
    let arrayAlazar = [];
    let numeroAlazar;
    for(i=0;i < num; i++){
        numeroAlazar = Math.floor((Math.random() * 100)+1);//Math.floor(Math.random() * 101) + 1  sin los if else
        
            arrayAlazar[i]=numeroAlazar;

        

    }
    return arrayAlazar;
} 

const sumadoVectores= (array1, array2)=>{
    let arrayVector = [];
    let sumaVector = 0;
    if(array1.length === array2.length){
        let i = 0;
        for(i=0;i<array1.length;i++){
           sumaVector = array1[i] + array2[array2.length-1 -i]
            arrayVector[i]= sumaVector;
        }
        return arrayVector;


    }else{
        return `ERROR:LOS ARRAYS NO COMPARTEN EL MISMO TAMAÑO`
    }

}


const imprimirArray= (...array)=>{
        for (let i =0 ; i< array.length; i++){
            console.log(`Array ${i}: ${array[i]}`)
        }
        

}

/*
const imprimirArray= (...array)=>{
        for (let i =0 ; i< array.length; i++){
            switch(i){
                 case 0:
                    `Array Suma: ${array[i]} `
                    break;
                case 1:
                    `Array 1 aleatorio: ${array[i]} `
                    break;
                case 2:
                    `Array 2 aleatorio: ${array[i]} `
                    break;
                default:
                    `Array ${i}: ${array[i]} `              
                    break;

        }
        
        }
    

}
*/

function calcular(arrayAlazar,sumado, imprimir){

   let array1= arrayAlazar(2);
   let array2= arrayAlazar(2)
    

    let suma = sumado(array1, array2)
    
    imprimir(suma, array1, array2)
    console.log("Otra forma")
    imprimir(`Suma: ${suma} \nArray 1: ${array1} \nArray 2 :${array2}`)

    


}


//Actividad 2
//Ejercicio 1 

const toCani = (cadena) => {
    let cadenaCani = "";
    
    if(validarString(cadena)){
        for(let i = 0; i< cadena.length; i++ ){
            if(Math.floor(Math.random() *2) === 0){
                                
                cadenaCani += letraCani(cadena.charAt(i).toUpperCase())

            }else{
                cadenaCani += letraCani(cadena.charAt(i).toLowerCase())

            }
          

        }
        switch(Math.floor(Math.random() * 2)){//  cadenaCani += Math.floor(Math.random() * 2) === 0 ? "HHH" : "HHHH" 
            case 0:
                cadenaCani += "HHH"
                break;
            case 1:
                cadenaCani += "HHHHH"
                break;
            
            default: 
                break;

        }

        return cadenaCani;

    }else{
        return `No has introducido un String`;
    }


}

const letraCani = (letra)=>{
    return letra === "c" || letra === "C" ? "K" : letra;
}


const validarString =(texto) => {
    return typeof texto === "string"
}

//Ejercicio 2
//Temporizador


const temporizador = (minutos,segundo) =>{




}











//Actividad 3 
//Ejercicio 1 - Mostrando (objetos)


const mostrarObjeto=((curso)=>{
    console.log(`================================`)
    console.log(`\tINFORME DEL CURSO`)

    console.log(`================================`)

    for(const propiedad in curso){
        console.log(`${propiedad} : ${curso[propiedad]} `);

    }

    console.log(`================================`)
    console.log(`\tFIN DEL INFORME DEL CURSO`)

    console.log(`================================`)

});

//ejercicio 2
/*
const calacularMedia = (...numeros)=>{
  let suma = 0;
    if(comprobarNumerico(numeros)){

  
         suma = numeros.reduce((acumulador,valor, indice, array)=>{
            return acumulador += valor;
        })

     return suma/numeros.length;
    }else{
        return `Hay un valor que no es un numero`
    }
}

const imprimirAficiones = (...aficiones)=> {

   return aficiones.map((v, i, array)=>{
        console.log(`Sus aficiones son: ${v}`)
    })

}

const imprimirInforme = (json)=>{
    for (let clave in json){
        if(typeof json[clave] !== "object" || Array.isArray(json[clave])){
            console.log(`${clave} - ${json[clave]} `)
            if(Array.isArray(json[clave])){
                imprimirAficiones(json[clave]);
            }

        }
 
        if(!Array.isArray(json[clave]) && typeof json[clave] === "object"){
            console.log(`${clave}:`)
        }
        
        if( !Array.isArray(json[clave]) && typeof json[clave] === "object"){
           for(let propiedad in json[clave]){
            console.log(`${propiedad} - ${json[clave][propiedad]}`)
        }
             
                
        }
    }

}
*/
//Ejercicio 4














//Actividad 4 

function mostradorObjetos2(objeto){
    for(let clave in objeto){
        if( Array.isArray(objeto[clave])){
            console.log(`${clave} - Esto es un array  - ${objeto[clave].map((v,i,array)=>{
                return v;
            })}`)
        }
        if(!Array.isArray(objeto[clave]) && typeof objeto[clave] === "function"  ){
            console.log(`${clave} - Esto es una  función `)
        }

        if(typeof objeto[clave] === "string" ){
            console.log(`${clave} - Esto es un string - ${objeto[clave]}`)
        }
        if(typeof objeto[clave] === "boolean"){
            console.log(`${clave} - Esto es un booleano - ${objeto[clave]}`)
        }        
        if(typeof objeto[clave] === "number" ){
            console.log(`${clave} - Esto es un numero - ${objeto[clave]}`)
        }
        if(typeof objeto[clave] === "object" && !Array.isArray(objeto[clave]) &&  objeto[clave] !== null ){
            console.log(`${clave} - Esto es un objeto `)
            for(let claveObjeto in objeto[clave] ){
                console.log(`${claveObjeto} : ${objeto[clave][claveObjeto]} - ${typeof objeto[clave][claveObjeto]}`);
            }

        }
    }

}


export{sumandoParametros,tablas,multiplicarSimple,calcularPropina, calcular,sumadoVectores,arrayRandom,imprimirArray, toCani, mostrarObjeto,mostradorObjetos2};