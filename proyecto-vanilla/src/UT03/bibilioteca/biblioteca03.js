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
            if(i === 0 || i%2 === 0){
                                
                cadenaCani += letraCani(cadena.charAt(i).toUpperCase())

            }else{
                cadenaCani += letraCani(cadena.charAt(i).toLowerCase())

            }
          

        }
        /* switch(Math.floor(Math.random() * 4) + 2){//  cadenaCani += Math.floor(Math.random() * 2) === 0 ? "HHH" : "HHHH" 
            case 2: // *4 hace del 0 al 3 en real y con el floor redondeo para abajo
                cadenaCani += "HH"
                break;
            case 3:
                cadenaCani += "HHH"
                break;
            case 4:
                cadenaCani += "HHHH"
                break;                
            case 5:
                cadenaCani += "HHHHH"
                break;

            default: 
                break;

        }
        */
       const hAleatoria =Math.floor(Math.random() * 4) + 2
       for(let j=0;j< hAleatoria ; j++){
            cadenaCani += "H"
       }
        return cadenaCani;

    }else{
        return `No has introducido un String`;
    }


}

const letraCani = (letra)=>{
    if( letra === "c"){
        return "k"
    }else if(letra === "C" ){
         return "K"
    }else{
        return letra
    }
}


const validarString =(texto) => {
    return typeof texto === "string"
}

//Ejercicio 2
//Temporizador


const temporizador = (minutos,segundos) =>{
    try{
        if(segundos === undefined ){
            if(typeof minutos === "number" && !Number.isNaN(minutos)){
                segundos = minutos
                minutos = 0
             if(segundos >= 60 ){
                minutos = Math.floor(segundos /60)
                segundos = segundos % 60 
             }
            }else{
                throw new Error(`El unico parametro introducido no es un numero`)
            }

        }
        if(segundos > 59 ){
            throw new Error(`Error, tonto pon del 0 - 59`);
        }
        if(segundos<0 || minutos<0){
            throw new Error(`Los numeros son negativos, tonto`)

        }

    if(minutos >= 0 && segundos >= 0 && !Number.isNaN(minutos) && !Number.isNaN(segundos) && typeof minutos === "number" && typeof segundos === "number"){    
    const tiempo=  setInterval(()=>{
        console.log(`${minutos} : ${segundos} `);  
        segundos--    
        if(segundos < 0){
                minutos--
                segundos= 59
            }
            if(segundos === 0 && minutos === 0){
                console.log(`${minutos} : ${segundos} `);   

                clearInterval(tiempo);
                return
            }
          
        
              

        }    

        ,1000)
    }else{
        throw new Error(`Los numeros parametros erroneo, idiota`)
    }
}catch(e){
    console.error(e.message)
}
}
//EJERCICIO 3 


const solicitarDNI=()=>{
    let dni = "";
    let arrayDni= [];
     const temporizador=setInterval(()=>{

        dni =prompt("Introduzca la numeracion de su DNI - en caso de cancelar escriba -1");
        if(dni==="-1"|| dni === null){
            clearInterval(temporizador);
            console.log(`Los DNIs introducidos son: ${arrayDni}`)
            return;
        }else if(validarDni(dni)){
            dni +=letraDni(dni);
            arrayDni=[...arrayDni,dni]
        }else{
            console.log("Error numero no valido")

        }
    },5000) 

    }



const letraDni=(dni)=>{
    const arrayLetras =["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"]
    const letraDni = dni % 23
    return arrayLetras[letraDni];

}
const validarDni = (dni) =>{
    return /^\d{8}$/.test(dni);
}

//Ejercicio 4 


const fechaActual=()=>{
    const fecha = new Date().toLocaleDateString("es-ES"); // .toLocaleDateString("es-ES") le da formato al castellano
    console.log(fecha);
}

//Ejercicio 5
const masDNI=(letraBuscada)=>{
    let contador = 0; 
    let dnisEncotrados= ""
    let numero = 48357001
    let dni= 0;
    for(numero; numero <= 48360000; numero++){
        dni=numero;
        if(letraDni(numero)===letraBuscada.toUpperCase()){
            dni += letraDni(numero)
            dnisEncotrados += `${dni}, `
            contador++;
        }
    } 
           console.log(`Se han encontrado ${contador} DNIs\n son los siguientes: ${dnisEncotrados} `) 

 }

//Ejercicio 6

const esPolindromo = (n)=>{
  const cadena = n.toString();
  let inicio = 0
  let final= cadena.length-1
   while (inicio< final){
    if(cadena.charAt(inicio)!==cadena.charAt(final)){
        return false;
    }
    inicio++
    final--
   } 

   return true;
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
const primoPolindromo = ()=>{
    let array=[]
    let i = 0
    while(i<=100000){
        if(esPolindromo(i) && esPrimo(i)){
            array=[...array,i]
        }
        i++
    }
    return array;


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

//Actividad 4

//Ejercicio 1 

///ESTA EN EL MAIN


//Ejercicio 2 

const generarNumerosAleatoriosArray=()=>{
    let array =[]
    for(let i=0; i< 10;i++){
    array = [...array,Math.floor(Math.random()*10)+1]

    }
    return array;
}

//Ejercicio 3 

const añadirUsuario=(arrayAntiguo,usuario)=>{
    if(typeof usuario === "object" && usuario !== null){
       let array = [...arrayAntiguo,usuario]; 
       return array;

    }else{
        return "No es un objeto"
    }

}
const mayorEdad =(usuarios)=>{

if(Array.isArray(usuarios)){
        return usuarios.filter((a)=> { return a.preferencias.edad>=18 })

    }else{
        return "No es un array"
    }

}

const correoYahoo =(usuarios)=>{

if(Array.isArray(usuarios)){
        return usuarios.filter((a)=> { return a.contacto.correoelectronico.includes("yahoo")  })

    }else{
        return "No es un array"
    }

}

const sinDatos =(usuarios)=>{

if(Array.isArray(usuarios)){
        return usuarios.filter((a)=> {  
            return a.contacto.telefono === "" ||
                a.nombre === "" ||
                a.preferencias.tema === "" ||
                a.preferencias.idioma === "" ||
                a.preferencias.edad === null ||
                a.contacto.direccion.calle === "" ||
                a.contacto.direccion.localidad === "" ||
                a.contacto.direccion.pais === "" ||
                a.contacto.correoelectronico === "" 

            
            })
              
        }else{
        return "No es un array"
    }

}
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

const añadirApellidos =(usuarios)=>{

if(Array.isArray(usuarios)){
        return usuarios.map((v,i,array)=>{
       
            return {...v, apellidos:"No indicado"}
             
        })
              
        }else{
        return "No es un array"
    }

}

const añadirCodigo =(usuarios)=>{

if(Array.isArray(usuarios)){
        return usuarios.map((v,i,array)=>{
       
            return {...v,
                contacto:{...v.contacto,
                 direccion:{...v.contacto.direccion,codigo: "00000"}}}
                  
             
        })
              
        }else{
        return "No es un array"
    }

}

export{mayorEdad,añadirUsuario,correoYahoo,sinDatos,condiciones3,añadirApellidos,añadirCodigo,generarNumerosAleatoriosArray,primoPolindromo,temporizador,sumandoParametros,tablas,multiplicarSimple,calcularPropina, calcular,sumadoVectores,arrayRandom,imprimirArray, toCani, mostrarObjeto,mostradorObjetos2,fechaActual,solicitarDNI,validarDni,masDNI};