# Funções dentro de um Objeto

Em JavaScript, você pode definir funções dentro de objetos. Essas funções são chamadas de métodos do objeto. Aqui está como você pode fazer isso:

### Exemplo:

```javascript
let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020,
  mostrarDetalhes: function() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
  }
};

console.log(carro.mostrarDetalhes()); 
```

**Saída:**
```
Marca: Toyota, Modelo: Corolla, Ano: 2020
```

### Explicação:

- No exemplo acima, `mostrarDetalhes` é um método do objeto `carro`.
- Esse método é definido como uma função dentro do objeto `carro`.
- Dentro do método, usamos `this` para nos referir ao objeto atual (`carro`) e acessar suas propriedades (`marca`, `modelo` e `ano`).

### Exemplo com função de construtor:

```javascript
function Carro(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
  this.mostrarDetalhes = function() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
  };
}

let meuCarro = new Carro("Toyota", "Corolla", 2020);
console.log(meuCarro.mostrarDetalhes()); 
```

**Saída:**
```
Marca: Toyota, Modelo: Corolla, Ano: 2020
```

### Explicação:

- No exemplo acima, `mostrarDetalhes` é um método do objeto `Carro`.
- Este método é definido como uma função dentro da função construtora `Carro`.
- Quando um novo objeto `Carro` é criado usando `new Carro(...)`, ele terá acesso ao método `mostrarDetalhes`.