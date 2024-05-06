# Removendo itens da Array

Em JavaScript, você pode remover itens de uma array usando os métodos `pop()`, `shift()` e `splice()`. Aqui está como você pode fazer isso:

### 1. Usando `pop()`

O método `pop()` remove o último elemento de um array e retorna esse elemento.

```javascript
// Criando um array
let frutas = ['Maçã', 'Banana', 'Laranja'];

// Removendo o último elemento usando pop()
let ultimaFruta = frutas.pop();

console.log('Última fruta removida:', ultimaFruta);
console.log('Array atualizado:', frutas);
```

### 2. Usando `shift()`

O método `shift()` remove o primeiro elemento de um array e retorna esse elemento.

```javascript
// Criando um array
let frutas = ['Maçã', 'Banana', 'Laranja'];

// Removendo o primeiro elemento usando shift()
let primeiraFruta = frutas.shift();

console.log('Primeira fruta removida:', primeiraFruta);
console.log('Array atualizado:', frutas);
```

### 3. Usando `splice()`

O método `splice()` pode ser usado para remover elementos de qualquer posição em um array.

```javascript
// Criando um array
let frutas = ['Maçã', 'Banana', 'Laranja', 'Morango'];

// Removendo o segundo elemento usando splice()
let frutaRemovida = frutas.splice(1, 1);

console.log('Fruta removida:', frutaRemovida);
console.log('Array atualizado:', frutas);
```

### Explicação:

- O método `pop()` remove o último elemento de um array e retorna esse elemento.
- O método `shift()` remove o primeiro elemento de um array e retorna esse elemento.
- O método `splice()` pode ser usado para remover elementos de qualquer posição em um array. Ele recebe dois argumentos: o índice de início da remoção e o número de elementos a serem removidos.

Esses são métodos úteis para remover itens de uma array em JavaScript, dependendo de onde você deseja removê-los.