# Adicionando valores a uma Array


Em JavaScript, você pode adicionar valores a um array usando métodos como `push()`, `unshift()` e `splice()`. Aqui está como você pode fazer isso:

### 1. Usando `push()`

O método `push()` adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.

```javascript
// Criando um array vazio
let frutas = [];

// Adicionando valores ao final do array usando o método push()
frutas.push('Maçã');
frutas.push('Banana');
frutas.push('Laranja');

console.log(frutas); // Saída: ['Maçã', 'Banana', 'Laranja']
```

### 2. Usando `unshift()`

O método `unshift()` adiciona um ou mais elementos ao início de um array e retorna o novo comprimento do array.

```javascript
// Criando um array vazio
let frutas = [];

// Adicionando valores no início do array usando o método unshift()
frutas.unshift('Maçã');
frutas.unshift('Banana');
frutas.unshift('Laranja');

console.log(frutas); // Saída: ['Laranja', 'Banana', 'Maçã']
```

### 3. Usando `splice()`

O método `splice()` pode ser usado para adicionar ou remover elementos de qualquer posição em um array.

```javascript
// Criando um array com valores iniciais
let frutas = ['Maçã', 'Banana', 'Laranja'];

// Adicionando valores em uma posição específica usando o método splice()
frutas.splice(1, 0, 'Morango', 'Uva');

console.log(frutas); // Saída: ['Maçã', 'Morango', 'Uva', 'Banana', 'Laranja']
```

### Explicação:

- O método `push()` adiciona valores ao final do array.
- O método `unshift()` adiciona valores no início do array.
- O método `splice()` pode ser usado para adicionar ou remover elementos de qualquer posição em um array. 

Esses são métodos úteis para adicionar valores a um array em JavaScript, dependendo de onde você deseja inserir os novos elementos.