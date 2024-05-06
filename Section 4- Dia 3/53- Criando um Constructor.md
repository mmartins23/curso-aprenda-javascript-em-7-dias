# Criado um Constuctor

Um construtor em JavaScript é uma função usada para criar e inicializar objetos. Aqui está como você pode criar um construtor em JavaScript:

### Exemplo de Construtor em JavaScript:

```javascript
// Definindo um construtor para objetos carro
function Carro(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
}

// Criando um novo carro usando o construtor
let meuCarro = new Carro("Toyota", "Corolla", 2020);

// Exibindo detalhes do carro
console.log(meuCarro);
```

**Saída:**

```javascript
Carro { marca: 'Toyota', modelo: 'Corolla', ano: 2020 }
```

### Explicação:

- `Carro` é o nome do construtor.
- Dentro do construtor, usamos a palavra-chave `this` para definir propriedades do objeto (`marca`, `modelo`, `ano`).
- Para criar um novo objeto usando o construtor, usamos a palavra-chave `new` seguida pelo nome do construtor e passamos os parâmetros necessários.

Usar um construtor é uma maneira comum de criar objetos em JavaScript, especialmente quando você precisa criar vários objetos do mesmo tipo com a mesma estrutura e comportamento. Isso permite reutilizar a lógica de inicialização em vários objetos.