"use strict";
//Ejercicio 1

function calcularIMC(masa, altura){
   let IMC =(masa/ (altura * altura));
   return IMC;
}
function tieneIMCMayor(IMC_juan,IMC_marcos){
    let resultado = false
    if(IMC_marcos > IMC_juan){
        resultado= true;
    }else{
        resultado= false;
    }
    return resultado
};

function resultado1(){
    return `${resultadoBoolean}`;
}




//Ejercico 2

function sumar(){
    let total=0;
    let i;
    for( i=0;i < arguments.length ;i++){
         total += arguments[i];
    }
    return total;
}
function dividir(num1,num2){
    if(arguments.length === 2 || num2 !== 0){
        return num1 / num2;
    }else{
        return "Debe haber dos parametros y que el segundo numereo no sea 0"
    }
}
 
function sacarMedia(){
    let totalMedia=0;
    let i = 0;
    for(i = 0; i< arguments.length; i++ ){
        totalMedia = sumar(totalMedia,arguments[i]);
    }
    
    return dividir(totalMedia , arguments.length);

}
function compararParticipantes(intJuan, intMiguel, intMaria ){
    let resultado= "";
    if(intJuan > intMiguel && intJuan > intMaria){
            resultado = "Juan tiene mayor media"
    }else if(intMiguel > intMaria && intMiguel > intJuan){
            resultado = "Miguel tiene mayor media"

    }else if(intMaria > intJuan && intMaria > intMiguel ){
            resultado = "Maria tiene mayor media"

    }else if(intJuan == intMiguel && intMaria == intMiguel){
            resultado = "Han quedado en empate los tres"
    }else if (intJuan == intMiguel && intMiguel > intMaria){
        resultado = "Hay empate entre Juan y Miguel"
    }else if (intMaria == intMiguel && intMiguel >intJuan ){
        resultado = "Hay empate entre Maria y Miguel"
    }else if (intJuan == intMaria && intJuan >intMiguel ){
        resultado = "Hay empate entre Maria y Juan"
    }else{
        resultado = "No hay nada claro"
    }
    return resultado;

}


//Ejercicio 3

function ejercicio3(numVeces, numero){
    let i;
    let numeroMultiplicado = numero ;
    let resultado= "";
    for(i = 0; i< numVeces; i++){
       resultado +=`${numeroMultiplicado}, `;
       numeroMultiplicado = numeroMultiplicado * 2;
       
    }
    return resultado
}

//Ejercicio 4
 

function ejercicio4 (nomProducto= "Producto generico", precio = 100 , porcentaje = 21 ){
    if(isNaN(precio) || isNaN(porcentaje) ){
        return "Error el precio/porcentaje no es un numero";
    }
    return `El producto es ${nomProducto} y su precio final es ${precio + ( precio * porcentaje /100)}€`;

}


//Carpeta 2 
//Ejercicio 1


function sacarMes(numeroMes=1){
        let resultado= "";
    if(typeof numeroMes === "number"){
        let mes = Math.trunc(numeroMes);// Math.trunc transforma en entero sin aproximacion  Math.round la vieja confiable redondea
        if(mes== 1){
            resultado= "Enero";
        }else if(mes== 2){
            resultado = "Febrero";
        }else if(mes== 3){
            resultado= "Marzo";
        }else if(mes== 4){
            resultado= "Abril";
        }else if(mes== 5){
            resultado= "Mayo";
        }else if(mes== 6){
            resultado= "Junio";
        }else if(mes== 7){
            resultado= "Julio";
        }else if(mes== 8){
            resultado= "Agosto";
        }else if(mes== 9){
            resultado= "Septiembre";
        }else if(mes== 10){
            resultado= "Octubre";
        }else if(mes== 11){
            resultado= "Noviembre";
        }else if(mes== 12){
            resultado= "Diciembre";
        }else{
            resultado= "Eres tonto pon un numero del 1-12"
        }
        return resultado;
    }else{
        return "Introduce un numero atolondrado"
    }
}


// Ejercicio 2 

 function esPar(num){
    let resultado;
    if(num % 2== 0){
        resultado= "Es par";
    }else{
        resultado= "Es impar";
    } 
    return resultado;
        
 }
    function tipoValor(num){
        if(num > 0){
            return "Es positivo";
        }else if (num < 0){
            return "Es negativo";
        }
    }
 function esPrimo(num){
    if(num <= 1){
        return false;
    }
    let i;
    for(i=2;i <= Math.sqrt(num) ;i++){//Math.sqrt raiz cuadrada
        if(num % i === 0){
            return false;// se encuetra un divisor por ende no es primo
        }
    }
    return true;    

    }
    function analisisNumerico(num){
        return `valor introducido, ${num}} Tipo de valor: ${tipoValor(num)} 
        Es par : ${esPar(num)} Es primo :${esPrimo(num)} `;
        

    }


//Ejercicio 3 

function multiplosDeTres (num) {
    if(tipoValor(num)){
        let i;
        for(i=1; i<=num; i++){
            if(i % 3 === 0){
                console.log(i);
            }
        }
    }
}
 


//Ejercicio 4

function calcularPonencia(num1, num2){
    if(Number.isInteger(num1) && Number.isInteger(num2)){
        let contador= 1;
        let potencia =Math.trunc(num1);
        let exponente = Math.trunc(num2);
        let resultadoFinal= potencia;
        while(contador !== exponente){
            if(contador === 1){
                contador++;
            }else{
               resultadoFinal =potencia * resultadoFinal;
               contador++; 
            } 
            
        }
        return resultadoFinal;



    }else{
        return "Introduzca los numeros enteros por parametros "
    }


}


//Ejercicio 5

function ejercicio5 (){
    let i;
    let total=0;
    let media ;
    for(i=0; i< arguments.length; i++){
       if(typeof arguments[i] !== "number" || !Number.isInteger(arguments[i])){
        return "Uno de los parametros no es de tipo numerico e integer";
       }
       if(arguments[i]< 1){

        return `La posicion ${i}: no es un numero positivo`
       }
        total += arguments[i];
    }
     media = total/arguments.length;
    return `La media es ${media}`;

}


function calculadora(num1, num2, operador){
    let resultado = 0;
    
    switch (operador){
        case "+":
            resultado= sumar(num1,num2);
            break;
        case "-":
            resultado= resta(num1,num2);
            break;
        case "x": 
            resultado= multiplicar(num1,num2);
            break;
        case "/":
            resultado= dividir(num1,num2);
            break;
        case "%":
            resultado= resto(num1,num2)
            break;
        default:
            console.error("Error en el operador");
            return;    
    }

    return `${num1} ${operador} ${num2} = ${resultado}`;  
}

function resto(num1, num2){
    if(arguments.length === 2){
        return num1% num2;
    }else{
        return "necesitas dos parametros"; 
    }

}


function multiplicar(){
    if(arguments.length !== 0){
        let i= 0;
        let multiplicado=0;
        for(i=0; i< arguments.length; i++){
            if(i === 0){
                multiplicado=arguments[i];
            }else{
                multiplicado *= arguments[i];

            }

        }
        return multiplicado;

    }else{
        return "No puedes multiplicar si no hay paramtros";
    }


}

function resta(){
    if(arguments.length !== 0){
        
    
    let resta= arguments[0];
    let i;
    for( i=0;i < arguments.length ;i++){
        if(i!==0){
            resta -= arguments[i];
        }
        
    }
    return resta;
    }else{
        return "Necesitas 1-2 parametros para restar";
    }
}

export{calcularIMC, tieneIMCMayor,sacarMedia,compararParticipantes,ejercicio3,ejercicio4,sacarMes,analisisNumerico,
     multiplosDeTres,calcularPonencia,ejercicio5,calculadora};