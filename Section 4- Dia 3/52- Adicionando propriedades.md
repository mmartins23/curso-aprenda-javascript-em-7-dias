# Adicionando propriedades

Aqui está um exemplo de como adicionar apenas propriedades (e não métodos) aos objetos criados por uma factory em JavaScript:

```javascript
// Factory para criar objetos carro
function criarCarro(marca, modelo, ano) {
  let carro = {
    marca: marca,
    modelo: modelo,
    ano: ano
  };

  return carro;
}

// Criar um novo carro usando a factory
let meuCarro = criarCarro("Toyota", "Corolla", 2020);

// Adicionar uma nova propriedade ao carro criado
meuCarro.cor = "Preto";

// Exibindo detalhes do carro
console.log(meuCarro);
```

**Saída:**

```javascript
{
  marca: 'Toyota',
  modelo: 'Corolla',
  ano: 2020,
  cor: 'Preto'
}
```

### Explicação:

- Após criar o objeto carro dentro da factory, podemos adicionar uma nova propriedade (`cor`) ao objeto diretamente.
- A nova propriedade é adicionada ao objeto `meuCarro` após sua criação, usando a notação de ponto (`meuCarro.cor = "Preto"`).

Essa é uma maneira simples de adicionar novas propriedades aos objetos criados por uma factory em JavaScript.