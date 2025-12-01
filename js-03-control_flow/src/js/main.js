/*
 El control flow (flujo de control) en JavaScript describe cómo 
 se ejecutan las instrucciones de un programa, desde el inicio 
 hasta el final. Se basa en estructuras como secuencias, 
 condiciones y bucles que determinan qué parte del código se ejecuta y cuándo.

*/

// ----------------- Condicional if-else --------------------
/*
 Ejecuta una sentencia si una condición específica es
 evaluada como verdadera.

 Sintaxis:
    if ( condición ) sentencia;

    if ( condición ) {
        sentencias;
    }

    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa;

    if ( condición ) {
        sentencias;
    } else {
        sentencias;
    }

    if (condición) sentencia;
    else if (condicion 2) sentencia;
         else sentencia_si_condicion2_es_falsa;


    if ( condicion1 ) sentencias;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   

*/

let isActive = true;

if (isActive === true) console.log("El usuario está activo");
if (isActive == true) console.log("El usuario está activo");

if (isActive === true) {
    console.log("El usuario está activo");
} else {
    console.log("El usuario no está activo");
}

if (isActive) {
    console.log("El usuario está activo"); 
}

// Bloque de código: 
// Conjunto de sentencias agrupadas entre llaves { ... }
{
    let firtsName = "Juan";
    let lastName = "Pérez";
    var alias = "Juampi";
    let age = 28;

    console.log(firtsName,lastName,alias); //Juan Pérez Juampi
    { // Bloque anidado
        let firtsName = "Sergio";
        let lastName = "Torres";
        var alias = "Serch";
        var alias = "Serchmo";
        console.log(firtsName,lastName,alias, age); //Sergio Torres Serch 28 
    }

    console.log(firtsName,lastName,alias, age); // Juan Pérez Serchmo 28
}
// console.log(firtsName,lastName,alias, age); firtsName is not defined
console.log(alias); // Serchmo

/*
 Realizar una función (Arrow function) que reciba un número como valor de temperatura.
 Si la temperatura es mayor a 25 grados, retornar "Hace calor".
 En caso contrario, retornar "Hace frío".

 Imprimir el valor del retorno por consola.
*/


/*
 Realizar una función que reciba el valor booleano si una persona está feliz o no
 Si la persona está feliz, mostrar en la interfaz de usuario la imagen "public/images/dino.jpg"
 En caso contrario mostrar la imagen "public/images/dino-emo.png"
*/
// if-else-if
const checkTemperature = (temperature) => {
    let message = "";
  if (temperature > 30) {
    message = "Hace calor";
  } else if (temperature >= 15 && temperature <= 30) {
    message ="Temperatura agradable";
  } else if (temperature < 15 && temperature >= 0) {
    message ="Hace frío";
  } else {
    message ="Hace mucho frío";
  }
  return message;
};


//Operador AND (&&) y OR (||)
/*
Operador de cortocircuito.

 OP1 && OP2 Si OP1 es verdadero, se retorna la expresión de OP2.
 OP1 || OP2 Si OP1 es verdadero, se retorna la expresión de OP1.
 
 Se consideran falsos: "", 0, null, undefined, NaN
*/
console.log( true && false ); // false
console.log( true && "Usando corto circuito "); // "Usando corto circuito "
console.log( "false" && "Mi mente sigue de vacaciones"); // "Mi mente sigue de vacaciones"
console.log( 0 && "Chau, chau"); // 0
console.log( "" && "Chau, chau"); // ""
console.log( false && "Chau, chau"); // false

console.log( true || false ); // true
console.log( true || "Usando corto circuito "); // true
console.log( "false" || "Mi mente sigue de vacaciones"); // "false"
console.log( 0 || "Chau, chau"); // "Chau, chau"
console.log( "" || "Chau, chau"); // "Chau, chau"
console.log( false || "Chau, chau"); // "Chau, chau"
console.log( false || undefined ); // undefined

console.log( "Activado" && undefined ); // undefined

const isLoggedIn = true;
if(isLoggedIn) {
    console.log("El usuario está logueado");
}  else {
    console.log("El usuario no está logueado");    
}

console.log( isLoggedIn && "El usuario está logueado" || "El usuario no está logueado" ); 



/*
     Realizar una función que reciba un código(weatherCode) de temperatura.
     De acuerdo al código recibo, retornar un mensaje:
     Code	Description
    0	        Clear sky
    1, 2, 3	    Mainly clear, partly cloudy, and overcast
    45, 48	    Fog and depositing rime fog
    
*/
const getWeather=(codigo)=>{
     let message;
    if(codigo===0){
        message="Clear Sky";
    }else if( codigo===1 ||codigo===2 ||codigo===3  ){
        message="Mainly clear, partly cloudy, and overcast";
    }else if(codigo===45 || codigo===48){
        message="Fog and depositing rime fog";
    }else{
        message="no definido";
    }
    return message;
   
}

console.log(getWeather(88));


//--------------- Condicional Switch-case --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.

 Para comparar la condicional switch usa el operador estricto ===

 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }

*/

/**
 * Switch case con el patrón "Single Entry, Single Exit"
 */
const getAccessLevel = ( role ) => {
    let accessLevel;
    switch ( role ) {
        case "super_admin":                   
        case "admin":
            accessLevel = "Acceso completo al sistema";
            break;
        case "editor":
            accessLevel = "Acceso para editar contenido";
            break
        case "viewer":
            accessLevel = "Acceso solo para ver contenido";
            break;
        default:
            accessLevel = "Acceso denegado";
    }
    return accessLevel;
};


/**
 * Switch case con el patrón "Early Return"
 */
const getAccessLevelWithEarlyReturn = ( role ) => {
    switch ( role ) {
        case "super_admin":                   
        case "admin":
            return "Acceso completo al sistema";      
        case "editor":
           return "Acceso para editar contenido";           
        case "viewer":
            return "Acceso solo para ver contenido";           
        default:
            return "Acceso denegado";
    }    
};

console.log( getAccessLevel("admin") ); // Acceso completo al sistema
console.log( getAccessLevel("super_admin") ); // Acceso completo al sistema
console.log( getAccessLevel("editor") ); // Acceso para editar contenido
console.log( getAccessLevel("customer") ); // Acceso denegado


/*
 Refactorizar la función getWeather usando switch-case
*/
//const getWeatherSwitch=(codigo)=>
    const getWeatherSwitch=(codigo)=>{
     let message;
     switch ( codigo){
        case 0 :
            message="Clear Sky";
            break
        case 1:
        case 2:
        case 3:
            message="Mainly clear, partly cloudy, and overcast";
            break;
        case 45:
        case 48: 
            message="Fog and depositing rime fog";
            break
        default :
            message="no definido";
     }
     return message;  
    } 

console.log (getWeatherSwitch(45));

    const getWeatherSwitch2=(codigo)=>{
     switch ( codigo){
        case 0 :
            return "Clear Sky";
        case 1:
        case 2:
        case 3:
            return "Mainly clear, partly cloudy, and overcast";
        case 45:
        case 48: 
            return "Fog and depositing rime fog";
        default :
            return "no definido";
     } 
    }
console.log (getWeatherSwitch2(0));

// ==========================================================

/*
 Dado un número entero, imprimir:

 "Negativo":  si el número es menor a 0.
 "Cero":  si el número es  0.
 "Positivo":  si el número es mayor a cero pero menor a 100.
 "Grande": si el número es mayor o igual a 100.
 */
function clasificarNumeroIfElse(numero) {
    if (numero < 0) {
      return "Negativo";
    } else if (numero === 0) {
      return "Cero";
    } else if (numero > 0 && numero < 100) {
      return "Positivo";
    } else {
      return "Grande";
    }
  }
  
  console.log(clasificarNumeroIfElse(-5));   // Negativo
  console.log(clasificarNumeroIfElse(0));    // Cero
  console.log(clasificarNumeroIfElse(50));   // Positivo
  console.log(clasificarNumeroIfElse(100));  // Grande

  // ----- Function Switch ----------
function evaluarElNumeroSwitch(numero) {

    switch ( true ) {
        case (numero < 0):
            mensaje = "Negativo";
            break;
        case (numero === 0):
            mensaje = "Cero";
            break;
        case (numero >0 && numero < 100):
            mensaje = "Positivo";
            break;
        case (numero >= 100):
            mensaje = "Grande";
            break;
        default:
            mensaje = "Numero desconocido";
    }
    return mensaje;
};

console.log(evaluarElNumeroSwitch(-45) ); // Negativo
console.log(evaluarElNumeroSwitch(0) ); // Cero
console.log(evaluarElNumeroSwitch(45) ); // Positivo
console.log(evaluarElNumeroSwitch(100) ); // Grande



// ------------------------ Operador ternario --------------------------
/*
 Es el único operador de JavaScript que tiene 3 operandos.
 Generalmente se utiliza como opción a la sentencia if-else.

 Sintaxis:
  condición ? expresiónSiCondiciónEsVerdadera : expresionSiCondiciónEsFalsa; 

*/


const votingEligibility = (age) => {
    return age >= 18 ? "Puede votar" : "No puede votar";
}

console.log(votingEligibility(20)); // Puede votar
console.log(votingEligibility(16)); // No puede votar

/*
 Realizar una función que reciba un número y retorne
 "Par" si el número es par o "Impar" si el número es impar.
 Usar el operador ternario.
*/
const numerosPar = (num) => {
    return num%2 === 0 ? "El número es par ;)" : "No es par :v";
}
console.log(numerosPar(14));