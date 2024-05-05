# O que e um Objeto

Em JavaScript, um objeto é uma coleção de dados e/ou funcionalidades relacionadas, que geralmente consiste em pares chave/valor. Um objeto pode ser criado usando chaves `{}` e pode conter zero ou mais pares chave/valor, onde a chave é uma string e o valor pode ser de qualquer tipo de dado válido em JavaScript, como string, número, booleano, array, função ou até mesmo outro objeto.

### Exemplo de objeto simples em JavaScript:

```javascript
let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020
};
```

Neste exemplo, `carro` é um objeto que tem três propriedades: `marca`, `modelo` e `ano`. As propriedades são acessadas usando a notação de ponto (`carro.marca`, `carro.modelo`, `carro.ano`) ou notação de colchetes (`carro['marca']`, `carro['modelo']`, `carro['ano']`).

### Outro exemplo com métodos:

```javascript
let pessoa = {
  nome: "João",
  idade: 30,
  cumprimentar: function() {
    return "Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.";
  }
};

console.log(pessoa.cumprimentar()); // Saída: Olá, meu nome é João e tenho 30 anos.
```

Neste exemplo, `pessoa` é um objeto que possui duas propriedades (`nome` e `idade`) e um método (`cumprimentar`). O método `cumprimentar` usa `this` para se referir ao objeto `pessoa` atual e acessar suas propriedades.

### Principais características de objetos em JavaScript:

- **Propriedades**: São pares chave/valor dentro de um objeto.
- **Métodos**: São funções definidas dentro de um objeto.
- **Acesso a propriedades**: Pode ser feito usando a notação de ponto (`objeto.propriedade`) ou a notação de colchetes (`objeto['propriedade']`).
- **Dinamicidade**: As propriedades de um objeto JavaScript podem ser adicionadas, removidas e modificadas a qualquer momento durante a execução do programa.

Em resumo, um objeto em JavaScript é uma estrutura de dados flexível que permite armazenar informações e funcionalidades relacionadas em uma única unidade.