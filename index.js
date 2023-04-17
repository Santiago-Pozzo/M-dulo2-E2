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

//Funciones de uso general
function imprimirSeparador() {
  console.log("=======================================================");
}

function imprimirEspacio() {
  console.log(" ");
  console.log(" ");
}

function imprimirPizzaId(pizza) {
  console.log(`La variedad número ${pizza.id} es una ${pizza.nombre}.`);
}

function imprimirPizzaPrecio(pizza) {
  console.log(`-La ${pizza.nombre} cuesta $${pizza.precio}.`);
}




//Consignas:
//a)Imprimir pizzas con ID impar
function imprimirImpar(pizza) {
  if (pizza.id % 2 === 1) {
    imprimirPizzaId(pizza);
  } else {}
}

imprimirSeparador();

pizzas.forEach ((nombre) => imprimirImpar(nombre));

imprimirSeparador();
imprimirEspacio();

//b)Pizza de costo menor a $600
imprimirSeparador();
console.log("Las siguientes variedades tienen un costo menor a $600:");

for (let index = 0; index < pizzas.length; index++) {
  if (pizzas[index].precio < 600) {
    imprimirPizzaPrecio (pizzas[index]);
    //console.log(`La ${pizzas[index].nombre}, cuesta $${pizzas[index].precio}.`);
  } else {}
}

imprimirSeparador();
imprimirEspacio();

//c)Imprimir todas las pizzas con su precio.
imprimirSeparador();
console.log("Estas son las variedades disponibles y sus precios:");

pizzas.forEach ((nombre) => imprimirPizzaPrecio(nombre));

imprimirSeparador();
imprimirEspacio();

//d)Imprimir ingredientes de cada pizza
function imprimirIngredientes(pizza) {
  imprimirPizzaId(pizza);
  console.log(`Sus ingredientes son:`);
  pizza.ingredientes.forEach((ingrediente) => console.log(ingrediente))
  console.log(" ");
}

imprimirSeparador();

pizzas.forEach((pizza) => imprimirIngredientes(pizza));

imprimirSeparador();
