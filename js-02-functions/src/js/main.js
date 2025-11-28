console.log("JS-02 funciones");

/*
 Las funciones permiten organizar, reutilizar y 
 estructurar el código. Su propósito principal es:

- Modularidad: Dividir un programa en piezas lógicas 
  más pequeñas y manejables.
- Reutilización de código: Reducir la duplicación de 
  código al reutilizar funciones.
- Legibilidad: Hacer que el código sea más claro y fácil de entender.
- Mantenimiento: Facilitar actualizaciones o modificaciones 
  al concentrar la lógica en un solo lugar.
- Abstracción: Ocultar detalles internos y expone 
  solo lo necesario para trabajar con ellas

  Recomendaciones para el uso de las funciones:

- Nombre descriptivo: Debe indicar claramente lo que hace.
  Se recomienda comenzar con un verbo
- Parámetros: Debe tener cero o más parámetros, separados por coma.
  Se recomienda no tener más de 3 parámetros.
- Seguir el principo SOLID, sobre el principio de responsabilidad única.
  (Single Responsibility Principle).
- Evitar efectos secundarios: Una función no debe modificar variables externas.

*/


/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
----------- Funciones declaradas --------------
(function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.

sintaxis:
function nombreFuncionCamelCase ( parámetros ){
    //cuerpo de la función
    instrucciones;
}

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/

console.log( saludar("Johan") ); // undefined porque la función saludar() no retorna nada

function saludar(nombre){
    console.log(`Hola ${nombre}, qué vas a comer hoy?`);
   
}


/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.

sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/



/**
 * Función que recibe nombre y apellido y retorna el nombre completo
 * @param {string} firstName nombre de la persona
 * @param {string} lastName apellido de la persona
 * @returns concatenación del nombre y apellido de la persona en la cohorte Ch62
*/
const printFullName = function (firstName, lastName) {
  return `${firstName} ${lastName} estudiante de la Ch62`;
};

console.log( printFullName("Johan", "Gonzalez") );
/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una sola instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return

sintaxis:
    const nombreVariable = (parametros) => instrucción;

    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/

// Convertir la función printFullName a función flecha
const nombreCompleto = (nombre, apellido) => `${nombre} ${apellido} estudiante de la Ch62`;

/*
 ------------ Parámetros por defecto -----------------------
             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca

*/

const makeCoffe = ( type = "Americano" ) => `Preparando un café ${type}`;

console.log( makeCoffe("Latte") ); // Preparando un café Latte
console.log( makeCoffe() ); // Preparando un café Americano

// TODO: generar una función que calcule el área de un rectángulo
// usando parámetros por defecto para largo y ancho.

// Ejemplo de uso de default parameters
console.log(`Vales 1000, estoy diciendo que vales: ${parseInt("1000")}`); // 1000
console.log(`Vales 1000 base 2, estoy diciendo que vales: ${parseInt("1000", 2)}`); // 8


/*
Pase de datos:
- Por valor: Se crea una copia independiente del dato. 
Si modificas la copia, el original NO cambia.
- Por referencia: Se pasa la dirección de memoria (referencia), 
no el dato en sí. Si modificas algo a través de esa referencia, el original SÍ cambia.
 */

/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */

 // Mal diseño: Cada vez que quieras una operación nueva, modificas esta función.
const calculateBad = (a, b, type) => {
    if (type === "sum") return a + b;
    if (type === "subtract") return a - b;
    // Si quiero dividir, tengo que editar este archivo y agregar otro if...
};

console.log( calculateBad(5, 3, "sum") ); // 8
console.log( calculateBad(5, 3, "subtract") ); // 2

// Aplicando funciones de callback
// 1. La función principal está "Cerrada" (no la tocamos más)
const calculate = (a, b, operationFunction) => {
    return operationFunction(a, b);
};

/* Primero definimos la funcion como variable -const #Nombredelafuncion 
*/
// console.log(`Usando incorrectamente la función: ${calculate( 5, 3, "sum")}`); // operationFunction is not a function

// 2. Definimos operaciones básicas
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
// Crear una función que sume dos números

const sum =  (a,b) => a + b;
const div = (a,b) => a/b;



console.log(`Realizando una resta: ${calculate(5, 3, subtract)}`); // 2
console.log(`Realizando una multiplicación: ${calculate(5, 3, multiply )}`); // 15
console.log(`Realizando una suma : ${calculate(5, 3, sum)} `); //8
console.log (`Realizando una división: ${calculate(5, 3, div)}`); //1.6


// Aplicar a la función calculate la función suma


/* la funcion de var dejo de usarse porque no tiene un dead time,
/ lo que provoca que se contamine la ventana global o el window 
