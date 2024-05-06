const num = [7, 8, 9];

// 63. Adicionando valores a uma Array

num.push(10, 11, 12);
num.unshift(1, 2, 3);
num.splice(3, 0, 4, 5, 6);


// 64. Localizando itens em um Array
console.log(num);
console.log(num.indexOf(8)); // 7
console.log(num.includes(8)); // true


// 65. Localizando itens em um Array de referencia

// Array de objetos
let cars = [
    { marca: 'Toyota', modelo: 'Corolla', ano: 2020 },
    { marca: 'Honda', modelo: 'Civic', ano: 2019 },
    { marca: 'Ford', modelo: 'Focus', ano: 2018 }
  ];

const toyotaCar = cars.find(car => car.marca == 'Toyota');
console.log(toyotaCar);


// 67. Removendo itens do Array

// Criando um array
let frutas = ['Maçã', 'Banana', 'Laranja'];

// Removendo o último elemento usando pop()
let ultimaFruta = frutas.pop();

console.log('Última fruta removida:', ultimaFruta);
console.log('Array atualizado:', frutas);


// Criando um array
let frutas1 = ['Maçã', 'Banana', 'Laranja'];

// Removendo o primeiro elemento usando shift()
let primeiraFruta = frutas1.shift();

console.log('Primeira fruta removida:', primeiraFruta);
console.log('Array atualizado:', frutas1);


// Criando um array
let frutas3 = ['Maçã', 'Banana', 'Laranja', 'Morango'];

// Removendo o segundo elemento usando splice()
let frutaRemovida = frutas3.splice(1, 1);

console.log('Fruta removida:', frutaRemovida);
console.log('Array atualizado:', frutas3);


// 68. Esvaziando uma Array

// Forma 1: Atribuir um novo array vazio à variável
let minhaArray1 = [1, 2, 3, 4, 5];
minhaArray1 = [];
console.log(minhaArray1); // Saída: []