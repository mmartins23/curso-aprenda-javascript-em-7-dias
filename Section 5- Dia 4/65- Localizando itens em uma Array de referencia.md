# Localizando itens em uma Array de referencia

Em JavaScript, você pode localizar itens em uma array de objetos usando o método `find()`. Aqui está como você pode fazer isso:

### Usando o método `find()`

O método `find()` retorna o valor do primeiro elemento no array que satisfaz a função de teste fornecida. Caso contrário, retorna `undefined`.

```javascript
// Array de objetos
let carros = [
  { marca: 'Toyota', modelo: 'Corolla', ano: 2020 },
  { marca: 'Honda', modelo: 'Civic', ano: 2019 },
  { marca: 'Ford', modelo: 'Focus', ano: 2018 }
];

// Localizando um carro pelo modelo usando o método find()
let carro = carros.find(function(carro) {
  return carro.modelo === 'Civic';
});

if (carro) {
  console.log('Carro encontrado:', carro);
} else {
  console.log('Carro não encontrado');
}
```

### Explicação:

- No exemplo acima, estamos procurando um carro com o modelo `'Civic'`.
- O método `find()` percorre cada objeto no array `carros` e retorna o primeiro objeto que satisfaz a condição especificada na função de teste.
- Se o carro for encontrado, ele será armazenado na variável `carro` e exibido no console. Caso contrário, exibirá 'Carro não encontrado'.

Este é um método muito útil para localizar itens em uma array de objetos em JavaScript.