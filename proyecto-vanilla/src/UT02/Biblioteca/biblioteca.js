"use strict";
//Ejercicio 1

function calcularIMC(masa, altura){
   let IMC =(masa/ (altura * altura));
   return IMC;
}
function tieneIMCMayor(IMC_juan,IMC_marcos){
    if(IMC_marcos > IMC_juan){
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
    let total=0;
    let i;
    for( i=0;i < arguments.length ;i++){
         total += arguments[i];
    }
    return total;
}
function dividir(num1,num2){
    return num1 / num2;
}
 
function sacarMedia(){
    let totalMedia=0;
    let i;
    for(i = 0; i< arguments.length; i++ ){
        totalMedia = sumar(totalMedia,arguments[i]);
    }
    
    return dividir(totalMedia , arguments.length);

}
function compararParticipantes(intJuan, intMiguel, intMaria ){
    if(intJuan > intMiguel && intJuan > intMaria){
            return "Juan tiene mayor media"
    }else if(intMiguel > intMaria && intMiguel > intJuan){
            return "Miguel tiene mayor media"

    }else if(intMaria > intJuan && intMaria > intMiguel ){
            return "Maria tiene mayor media"

    }else if(intJuan == intMiguel && intMaria == intMiguel){
            return "Han quedado en empate los tres"
    }else if (intJuan == intMiguel && intMiguel > intMaria){
        return "Hay empate entre Juan y Miguel"
    }else if (intMaria == intMiguel && intMiguel >intJuan ){
        return "Hay empate entre Maria y Miguel"
    }else if (intJuan == intMaria && intJuan >intMiguel ){
        return "Hay empate entre Maria y Juan"
    }else{
        return "No hay nada claro"
    }

}

export{sumar,dividir,sacarMedia,compararParticipantes};

//Ejercicio 3

function ejercicio3(numVeces, numero){
    let i;
    let numeroMultiplicado = numero ;
    for(i = 0; i< numVeces; i++){
       console.log(`${numeroMultiplicado} `);
       numeroMultiplicado = numeroMultiplicado * 2;
       
    }

}
export{ejercicio3};

//Ejercicio 4
 

function ejercicio4 (nomProducto= "Producto generico", precio = 100 , porcentaje = 21 ){
    if(isNaN(precio)){
        return "Error el precio no es un numero";
    }else if(isNaN(porcentaje)){
        return "Error el porcentaje no es un numero";
    }
    return `El producto es ${nomProducto} y su precio final es ${(precio * porcentaje) /100}`;


}
export{ejercicio4};


//Carpeta 2 
//Ejercicio 1


function sacarMes(numeroMes=1){
    if(typeof numeroMes === "number"){
        let mes = Math.trunc(numeroMes);// transforma en entero sin aproximacion  Math.round la vieja confiable redondea
        if(mes== 1){
            return "Enero";
        }else if(mes== 2){
            return "Febrero";
        }else if(mes== 3){
            return "Marzo";
        }else if(mes== 4){
            return "Abril";
        }else if(mes== 5){
            return "Mayo";
        }else if(mes== 6){
            return "Junio";
        }else if(mes== 7){
            return "Julio";
        }else if(mes== 8){
            return "Agosto";
        }else if(mes== 9){
            return "Septiembre";
        }else if(mes== 10){
            return "Octubre";
        }else if(mes== 11){
            return "Noviembre";
        }else if(mes== 12){
            return "Diciembre";
        }else{
            return "Eres tonto pon un numero del 1-12"
        }
    }else{
        return "Introduce un numero atolondrado"
    }
}
export{sacarMes};


// Ejercicio 2 

 function esPar(num){
    if(num % 2== 0){
        return "Es par";
    }else{
        return "Es impar";
    } 
        
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
        console.log(`valor introducido, ${num}}`);
        console.log(`Tipo de valor: ${tipoValor(num)} Es par : ${esPar(num)} Es primo :${esPrimo(num)} `);
        

    }

export{analisisNumerico,esPar,esPrimo,tipoValor};

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
 
export{multiplosDeTres};


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
        console.log(resultadoFinal);



    }else{
        return "Introduzca los numeros enteros por parametros "
    }


}
export{calcularPonencia};


//Ejercicio 5

function ejercicio5 (){

}

