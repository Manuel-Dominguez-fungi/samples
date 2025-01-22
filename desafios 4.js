//1. Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

// 2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 
//'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguajesDeProgramacion = ["JavasScript", "C", "C++", "Kotlin", "Python"];

//3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push("Java", "Ruby", "GoLang");


//console.log(LenguajesDeProgramacion);
//4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

function mostrarLenguajes (lenguagesDeProgramacion){
    console.log(lenguajesDeProgramacion);
}
mostrarLenguajes(lenguajesDeProgramacion);
//5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

function inverso(lenguagesDeProgramacion){
    let inverso = lenguagesDeProgramacion.reverse();
    console.log(inverso);
}
inverso(lenguajesDeProgramacion);

// 6. Crea una función que calcule el promedio de los elementos en una lista de números.

let numeros = [3, 4, 9, 3, 6, 2, 0, 5, 1];

function calcularPromedio(numeros) {
    // Verificar si la lista está vacía
    if (numeros.length === 0) {
        return "La lista está vacía, no se puede calcular el promedio.";
    }

    // Sumar todos los elementos de la lista
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    // Calcular el promedio
    let promedio = suma / numeros.length;
    return promedio;
}

// Ejemplo de uso
let promedio = calcularPromedio(numeros);
console.log(`El promedio de la lista es: ${promedio}`);

//7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
let lista = [3, 4, 9, 3, 6, 2, 0, 5, 1];
function encontrarMaxMin(lista) {
    if (lista.length === 0) {
        console.log("La lista está vacía.");
        return;
    }
    let maximo = Math.max(...lista);
    let minimo = Math.min(...lista);
    console.log(`El número más grande es: ${maximo}`);
    console.log(`El número más pequeño es: ${minimo}`);
}

encontrarMaxMin(lista);
// 8. Crea una función que devuelva la suma de todos los elementos en una lista.

function sumaDeTodosLosElementos(lista2) {
    let suma = 0; // Inicializar la suma en 0
    for (let i = 0; i < lista2.length; i++) { // Recorrer la lista
        suma += lista2[i]; // Sumar cada elemento al total
    }
    return suma; // Devolver el resultado
}

let lista2 = [20, 25, 10, 50, 45, 15]; // Lista de números
let lista3 = [20, 25, 10, 50, 45, 15, 200];
let resultado = sumaDeTodosLosElementos(lista3); // Llamar la función
console.log(`La suma de todos los elementos es: ${resultado}`); // Mostrar el resultado


//Crea una función que reciba una lista como parámetro y retorne el índice de un elemento también pasado como parámetro. Si ese elemento no existe en la lista, retorna -1.

function encontrarIndiceElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i; // Retorna el índice del elemento encontrado
    }
  }
  return -1; // Retorna -1 si el elemento no se encuentra en la lista
}