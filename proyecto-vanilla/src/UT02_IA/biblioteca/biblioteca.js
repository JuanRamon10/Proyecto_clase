"use strict";

function compararEdadesMucho(){
    let persona=0;
    let i =0;
    let empate= `Empate con las personas: ${persona}`;
    for(i=0; i< arguments.length; i++){
        if(persona < arguments[i]){
                persona= i;

        }else if(arguments[persona] === arguments[i] ){
                empate += `, ${i}`;
        }
    }

    if(persona< arguments[i]){
        return persona;
    }else if(arguments[persona] === arguments[i]){
        return empate;
    }

};

function compararEdades(num1,num2){
    let resultado= "";  
    if(typeof num1 === "number" && typeof num2 === "number" ){
        if(num1 >= 0 && num1 <= 120 && num2 >= 0 && num2 <= 120 ){

            if(num1> num2){
                resultado = "Persona 1 es mayor";
            }else if(num1 < num2){
                resultado = "Persona 2 es mayor";

            }else if(num1 === num2){
                resutado = "Hay empate entre los dos";
            }else{
                resultado = "Error inesperado";
            }
        
        }else{
            resultado = "Introduzca los numeros 0-120";
        }


    }else{
        resultado = "Introduzca numeros";
    }

    return `${resultado}`;

};

export{compararEdades};