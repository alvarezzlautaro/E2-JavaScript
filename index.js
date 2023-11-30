const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

/*🔥 Utilizando métodos de array e iterando sobre el array de pizzas, realizar las siguientes actividades, imprimiendo en consola:

a)  Las pizzas que tengan un id impar.
b) Responder: ¿Hay alguna pizza que valga menos de $600?
c) El nombre de cada pizza con su respectivo precio.
d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.

TODAS  las respuestas deben ser USER-FRIENDLY. 
Si (como en el punto B), la respuesta es un booleano (true o false, hay o no hay), no imprimir el booleano , imprimir en consola una respuesta que toda persona pueda entender, sepa o no de programación (Es decir, no podemos imprimir un array o un objeto en consola, por ejemplo).
*/

// Ejercicio a) Pizzas que tengan id IMPAR

// function obtenerPizzasIdImpar(listaDePizzas) {
//   const pizzasIdImpar = listaDePizzas.filter(pizza => pizza.id % 2 !== 0);
//   return pizzasIdImpar;
// }

// const resultado = obtenerPizzasIdImpar(pizzas);

// console.log("Estas son las pizzas con ID impar son las de Muzzarella, Napolitana y Especial.");

// Hay alguna pizza que valga menos de $600?

// function pizzaA600(listaDePizzas) {
//   const pizzas600 = listaDePizzas.filter (pizza => pizza.precio < 600);
//   return pizzas600
// }

// const resultado = pizzaA600(pizzas);

// console.log('Solo la pizza de Muzzarella sale menos de $600');

// Nombre de cada pizza con su respectivo precio

// function obtenerNombreYPrecio(listaDePizzas){
//   const nombreYPrecio = listaDePizzas.map(pizza => `${pizza.nombre}: $${pizza.precio}`);
//   const resultadoComoString = nombreYPrecio.join(', ');
//   return resultadoComoString;
// }

//  const resultado= obtenerNombreYPrecio(pizzas);

//  console.log(resultado)


// Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.

// function mostrarIngredientesPizza(listaDePizzas) {
//   listaDePizzas.forEach(pizza => {
//     console.log(`Ingredientes de ${pizza.nombre}`);
//     pizza.ingredientes.forEach(ingrediente => {
//       console.log(` ${ingrediente}`);
//     })
//   })
//  }

//  mostrarIngredientesPizza(pizzas);