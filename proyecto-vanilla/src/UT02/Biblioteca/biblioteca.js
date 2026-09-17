"use strict";
//Ejercicio 1

function calcularIMC(masa, altura){
   let IMC =(masa/ (altura * altura));
   return IMC;
}
function tieneIMCMayor(IMC_juan,IMC_marcos){
    if(IMC_juan > IMC_marcos){
        return true;
    }else{
        return false;
    }
};

function resultado1(){
    return `¿Tiene Marcos un IMC mayor que el de Juan?: ${resultadoBoolean}`;
}

export {calcularIMC, tieneIMCMayor, resultado1};



//Ejercico 2

function sumar(){
    for(i=0;arguments.length ;i++){
        let total =+ arguments[i];
    }
}
function dividir(num1,num2){
    return num1 / num2;
}

function sacarMedia(){
    let suma=0;
        for(i=0;arguments.length ;i++){
        let total =+ arguments[i];
    }
}