# Adicionando propriedades

Você pode adicionar propriedades adicionais ao objeto retornado pela factory. Aqui está como você pode fazer isso:

```javascript
// Factory para criar objetos carro
function criarCarro(marca, modelo, ano, cor) {
  return {
    marca: marca,
    modelo: modelo,
    ano: ano,
    cor: cor,
    mostrarDetalhes: function() {
      return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}`;
    }
  };
}

// Criar um novo carro usando a factory
let meuCarro = criarCarro("Toyota", "Corolla", 2020, "Preto");

console.log(meuCarro.mostrarDetalhes());
```

**Saída:**

```
Marca: Toyota, Modelo: Corolla, Ano: 2020, Cor: Preto
```

### Explicação:

- Adicionamos uma nova propriedade `cor` ao objeto retornado pela factory.
- Passamos o valor da cor como um parâmetro ao chamar a factory `criarCarro`.
- O método `mostrarDetalhes` foi atualizado para incluir a propriedade `cor` no retorno da string.

Dessa forma, a factory pode ser facilmente estendida para criar objetos com diferentes conjuntos de propriedades, dependendo das necessidades do seu aplicativo.