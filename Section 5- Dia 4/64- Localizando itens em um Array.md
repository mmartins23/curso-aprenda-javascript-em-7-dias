# Localizando itens em uma Array primitiva

Em JavaScript, você pode localizar itens em uma array usando os métodos `indexOf()` e `includes()`. Aqui está como você pode fazer isso:

### 1. Usando `indexOf()`

O método `indexOf()` retorna o primeiro índice em que um elemento especificado pode ser encontrado no array, ou -1 se o elemento não estiver presente.

```javascript
// Criando um array
let frutas = ['Maçã', 'Banana', 'Laranja'];

// Verificando se 'Banana' está presente no array usando indexOf()
let indice = frutas.indexOf('Banana');

if (indice !== -1) {
  console.log(`'Banana' está presente no índice ${indice}`);
} else {
  console.log('A fruta não foi encontrada');
}
```

### 2. Usando `includes()`

O método `includes()` verifica se um array contém um determinado elemento e retorna `true` ou `false` conforme apropriado.

```javascript
// Criando um array
let frutas = ['Maçã', 'Banana', 'Laranja'];

// Verificando se 'Banana' está presente no array usando includes()
if (frutas.includes('Banana')) {
  console.log('Banana está presente no array');
} else {
  console.log('Banana não está presente no array');
}
```

### Explicação:

- O método `indexOf()` retorna o índice do primeiro elemento correspondente encontrado no array, ou -1 se o elemento não estiver presente.
- O método `includes()` retorna `true` se o array contém o elemento especificado, e `false` caso contrário.

Ambos os métodos são úteis para verificar se um elemento está presente em uma array.

Espero que isso esclareça como você pode localizar itens em uma array usando `indexOf()` e `includes()` em JavaScript!