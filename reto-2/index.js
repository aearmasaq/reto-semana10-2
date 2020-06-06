/*1.Utilizando función arrow, crear una función que reciba como parámetros un nombre, 
apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”*/

let saludo = (nombre , edad) => `Hola mi nombre es ${nombre} y mi edad es ${edad}`;
console.log( saludo('Edimir', 20) );

/*2.	Cree una función que tome números y devuelva la suma de sus cubos.
sumOfCubes(1, 5, 9) ➞ 855*/

function sumOfCubes(num1, num2 , num3){
    let cubo1 = Math.pow(num1, 3);
    let cubo2 = Math.pow(num2, 3);
    let cubo3 = Math.pow(num3, 3);
    let suma = cubo1 + cubo2 + cubo3;
    return suma;
}

console.log("La suma de los cubos de los numeros ingresados son: " + sumOfCubes(1, 5, 9));


/*3.	Crear una funcion que me retorne el tipo de valor entregado, utilizar la función e imprimir los distintos tipos de JS.*/

function TipoValor(){
    let boleano = true ;
    let numerico = 22 ;
    let texto = "mi texto" ;
    
    console.log("El tipo de true  false  es: " + typeof boleano);
    console.log("El tipo de (1,2,3, etc.) es: " + typeof numerico) ;
     console.log("El tipo de texto es: " + typeof texto);
}
 TipoValor();


/*4.	Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)*/

function sumaNum(...nnumeros){
    let resultado = 0;
    for(let i =0; i < nnumeros.length; i++ ){
        resultado += nnumeros[i];
    }
    return resultado;
}

console.log(sumaNum(1,2,3,4,5,6,7));

/*5.	Crear una función que reciba una matriz de valores y filtre los valores que no son string*/

let dato =[12, "camilo", 20, "Juan", 15, "Mariana", 60, true, false];
let msgForNormal = '';
   
for (let i=0; i<dato.length; i++) {
     msgForNormal = dato[i]; 
    
     if (typeof msgForNormal === "number") {
         const arr=[msgForNormal];
          console.log(arr);
     }
    }


/*6.	Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]*/

function minMax([a,b, ...rest]){
    let maxValue = Math.max(a,b, ...rest);
    let minValue = Math.min(a,b, ...rest);

    let  resultado = [minValue,  maxValue];
    return resultado;
}


console.log(minMax([1, 2, 3, 4, 5]));
 
/*7.	Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"*/



/*8.	Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90,
2]*/

function findLargestNums([...rest1], [ ...rest2], [ ...rest3] ){
    let maxValue1 = Math.max(...rest1);
    let maxValue2 = Math.max( ...rest2);
    let maxValue3 = Math.max( ...rest3);   

    let  resultado = [maxValue1,  maxValue2, maxValue3];
    return resultado;
}


console.log(findLargestNums([4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]));

/*9.	Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.

charIndex("circumlocution", "c") ➞ [0, 8]
// The first "c" has index 0, the last "c" has index 8.*/

/*10.	Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]*/

  // expected output: Array ["somestring", 42, false]

  const arrDate = {
    'a': 1,
    'b': 2
  };
const arr = Array.from(Object.keys(arrDate), k=>[`${k}`, arrDate[k]]);
console.log(arr);
  

/*11.	Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.

getBudgets([
{ name: "John", age: 21, budget: 23000 },
 
{ name: "Steve",	age: 32, budget: 40000 },
{ name: "Martin",	age: 16, budget: 2700 }
]) ➞ 65700*/
/*12.	Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
getStudentNames([
{ name: "Steve" },
{ name: "Mike" },
{ name: "John" }
]) ➞ ["Becky", "John", "Steve"]*/  
  

  function getStudentNames([name]){ 
          
        console.log(Object.values(msgForNormal));
  }


  getStudentNames([
    { name: "Steve" },
    { name1: "Mike" },
    { name2: "John" }
    ]);

/*13.	Escriba una función que convierta un objeto en una matriz de claves y valores.
objectToArray({ likes: 2,
dislikes: 3,
followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]*/
  // expected output: Array ["somestring", 42, false]

  const obj={ likes: 2,  dislikes: 3,
    followers: 10};

console.log(Object.entries(obj));

/*14.	Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados incluyendo n.
squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14*/

/*function squaresSum(date1){    
    let resultado = 0;
    for(let i =0; i <= date1.length; i++ ){
        resultado  += date1[i];
    }
    return resultado;    
}*/

var numero=0;
let suma=0;

for (let i=1; i<=3; i++){
    resultado = Math.pow(i, 2);
    console.log(resultado);
}


/*15.	Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
multiplyByLength([2, 3, 1, 0]) ➞  [8, 12, 4, 0]*/

/*16.	Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
countdown(5) ➞ [5, 4, 3, 2, 1, 0]*/

/*17.	Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.*/

/*18.	Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]*/

/*19.	Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento)
 es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
repeat(13, 5) ➞ [13, 13, 13, 13, 13]*/

/*20.	Escriba una función, .vreplace () que extienda el prototipo de cadena 
reemplazando todas las vocales en una cadena con una vocal especificada. "apples and bananas".vreplace("u") ➞ "upplus und bununus"*/
 

/*21.	Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
findNemo("I am finding Nemo !") ➞  "I found Nemo at 4!"*/

/*22.	Cree una función que capitalice la última letra de cada palabra.
capLast("hello") ➞ "hellO"*/


function MaysPrimera(string){

    let ultimoCaracter = string.charAt(string.length - 1).toUpperCase();
    return ultimoCaracter;
  }

console.log(MaysPrimera('Mama'));