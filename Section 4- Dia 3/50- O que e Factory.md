# O que e Factory

Em JavaScript, o padrão de projeto **Factory** é um padrão de criação que é usado para criar objetos de forma mais flexível e abstrata. Em vez de criar objetos diretamente usando um construtor, você pode delegar a responsabilidade de criar objetos para uma função de fábrica.

### Exemplo de Factory em JavaScript:

```javascript
// Factory para criar objetos carro
function criarCarro(marca, modelo, ano) {
  return {
    marca: marca,
    modelo: modelo,
    ano: ano,
    mostrarDetalhes: function() {
      return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }
  };
}

// Criar um novo carro usando a factory
let meuCarro = criarCarro("Toyota", "Corolla", 2020);

console.log(meuCarro.mostrarDetalhes());
```

**Saída:**

```
Marca: Toyota, Modelo: Corolla, Ano: 2020
```

### Explicação:

- No exemplo acima, `criarCarro` é uma função de fábrica que retorna um objeto carro.
- Esta função encapsula a lógica de criação do objeto carro.
- Isso permite criar objetos carro sem a necessidade de usar `new` ou uma função construtora.
- O método `mostrarDetalhes` é adicionado ao objeto retornado pela factory.

### Vantagens do padrão Factory:

- **Encapsulamento**: A lógica de criação do objeto é encapsulada na função de fábrica, tornando mais fácil de entender e manter.
- **Flexibilidade**: A função de fábrica pode retornar diferentes tipos de objetos com base em determinadas condições ou parâmetros de entrada.
- **Abstração**: Os consumidores da factory não precisam se preocupar com os detalhes de implementação da criação do objeto.

O padrão Factory é útil quando você precisa criar objetos que requerem uma lógica complexa de inicialização ou quando você quer ocultar a complexidade da criação do objeto.