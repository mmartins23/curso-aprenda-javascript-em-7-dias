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