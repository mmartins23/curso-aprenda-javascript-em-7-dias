# Criando um Objeto

Você pode criar um objeto em JavaScript usando a sintaxe de classe introduzida no ECMAScript 2015 (ES6) e suas funcionalidades adicionais. Aqui está como você pode criar um objeto usando classes em JavaScript ES2020:

```javascript
class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  mostrarDetalhes() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
  }
}

let carro = new Carro("Toyota", "Corolla", 2020);
console.log(carro.mostrarDetalhes()); // Saída: Marca: Toyota, Modelo: Corolla, Ano: 2020
```

Neste exemplo, estamos criando uma classe `Carro` com um construtor que define as propriedades `marca`, `modelo` e `ano`. Além disso, a classe possui um método `mostrarDetalhes()` que retorna uma string com os detalhes do carro.

Agora, ao criar um objeto `carro` usando a classe `Carro`, podemos acessar suas propriedades e métodos da seguinte forma:

```javascript
console.log(carro.marca); // Saída: Toyota
console.log(carro.modelo); // Saída: Corolla
console.log(carro.ano); // Saída: 2020
console.log(carro.mostrarDetalhes()); // Saída: Marca: Toyota, Modelo: Corolla, Ano: 2020
```

Esse é um exemplo simples de como criar um objeto em JavaScript usando a sintaxe de classe introduzida no ECMAScript 2015 (ES6) e suas funcionalidades adicionais.