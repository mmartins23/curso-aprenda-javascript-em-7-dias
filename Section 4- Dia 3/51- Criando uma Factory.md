# Criando uma Factory

Claro! Aqui está um exemplo de como criar uma factory em JavaScript:

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

- `criarCarro` é uma função de fábrica que retorna um objeto carro.
- Esta função aceita parâmetros (`marca`, `modelo` e `ano`) e usa esses parâmetros para criar um novo objeto carro.
- O objeto retornado pela factory tem um método `mostrarDetalhes` que retorna uma string formatada com os detalhes do carro.

Este é um exemplo simples de como você pode usar uma factory em JavaScript para criar objetos de forma mais flexível e abstrata.