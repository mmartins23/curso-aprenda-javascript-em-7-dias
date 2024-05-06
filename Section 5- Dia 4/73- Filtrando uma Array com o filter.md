# Filtrando uma Array com o filter

O método `filter()` em JavaScript é usado para criar uma nova array com todos os elementos que passam em um teste (fornecido como uma função).

### Exemplo:

Suponha que você tenha uma array de números e queira filtrar apenas os números pares:

```javascript
// Array de números
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtrando apenas os números pares
let numerosPares = numeros.filter(function(numero) {
  return numero % 2 === 0;
});

console.log(numerosPares); // Saída: [2, 4, 6, 8, 10]
```

No exemplo acima:

- A função passada para `filter()` verifica se o número é par usando o operador `%`.
- O método `filter()` cria uma nova array (`numerosPares`) contendo apenas os números que passam no teste (ou seja, os números pares).

Você também pode escrever a mesma coisa usando uma arrow function:

```javascript
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosPares = numeros.filter(numero => numero % 2 === 0);

console.log(numerosPares); // Saída: [2, 4, 6, 8, 10]
```

A função passada para `filter()` retorna `true` para os elementos que deseja manter na nova array e `false` para os elementos que deseja descartar.
