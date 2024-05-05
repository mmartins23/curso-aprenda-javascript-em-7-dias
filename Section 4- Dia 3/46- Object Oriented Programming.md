# Object Oriented Programming


Começar com programação orientada a objetos (POO) em JavaScript é uma excelente maneira de estruturar e organizar seu código para torná-lo mais modular e reutilizável. Aqui está uma introdução básica sobre como começar com POO em JavaScript:

### 1. Conceitos Básicos:

#### a. Objetos:
JavaScript é uma linguagem baseada em objetos. Tudo em JavaScript é um objeto ou pode ser tratado como um objeto.

#### b. Classes:
JavaScript introduziu classes no ES6 (ECMAScript 2015), mas é importante entender que as classes são "açúcar sintático" sobre o sistema de protótipos existente em JavaScript.

#### c. Herança:
JavaScript suporta herança prototípica, onde os objetos podem herdar propriedades e métodos uns dos outros.

### 2. Criando uma Classe:

```javascript
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  // Método
  getBrand() {
    return this.brand;
  }

  // Outro método
  getDetails() {
    return `${this.year} ${this.brand} ${this.model}`;
  }
}
```

### 3. Criando Objetos a partir da Classe:

```javascript
let myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getDetails()); // Saída: 2020 Toyota Corolla
```

### 4. Herança em JavaScript:

Você pode criar subclasses usando a palavra-chave `extends`:

```javascript
class ElectricCar extends Car {
  constructor(brand, model, year, batteryLife) {
    super(brand, model, year);
    this.batteryLife = batteryLife;
  }

  // Método
  getBatteryLife() {
    return this.batteryLife;
  }

  // Sobrescrevendo o método da classe pai
  getDetails() {
    return `${super.getDetails()} - Battery Life: ${this.batteryLife} kWh`;
  }
}
```

### 5. Criando um Objeto a partir da Subclasse:

```javascript
let myElectricCar = new ElectricCar("Tesla", "Model 3", 2022, 75);
console.log(myElectricCar.getDetails()); // Saída: 2022 Tesla Model 3 - Battery Life: 75 kWh
```

### 6. Considerações Finais:

- JavaScript permite uma abordagem flexível para a programação orientada a objetos, usando tanto classes quanto a herança prototípica.
- Comece com conceitos simples e pratique para construir uma compreensão sólida da POO em JavaScript.
- Aprenda sobre métodos como `constructor`, `super`, `extends`, e pratique-os para entender como eles funcionam.