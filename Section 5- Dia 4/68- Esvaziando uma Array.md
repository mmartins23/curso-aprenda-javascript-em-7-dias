# Esvaziando uma Array

Aqui estão três formas de esvaziar uma array em JavaScript:

### 1. Atribuindo um novo array vazio à variável:

```javascript
// Forma 1: Atribuir um novo array vazio à variável
let minhaArray1 = [1, 2, 3, 4, 5];
minhaArray1 = [];
console.log(minhaArray1); // Saída: []
```

### 2. Usando o método `splice()` para remover todos os elementos:

```javascript
// Forma 2: Usando o método splice() para remover todos os elementos
let minhaArray2 = [1, 2, 3, 4, 5];
minhaArray2.splice(0, minhaArray2.length);
console.log(minhaArray2); // Saída: []
```

### 3. Usando o método `length`:

```javascript
// Forma 3: Definindo o comprimento da array como 0
let minhaArray3 = [1, 2, 3, 4, 5];
minhaArray3.length = 0;
console.log(minhaArray3); // Saída: []
```

### Explicação:

- Na **Forma 1**, atribuímos um novo array vazio (`[]`) à variável que contém a array que queremos esvaziar. Isso substitui a array original por um novo array vazio.
- Na **Forma 2**, usamos o método `splice()` para remover todos os elementos da array. Passamos `0` como índice de início e `minhaArray.length` como o número de elementos a serem removidos. Isso efetivamente remove todos os elementos da array.
- Na **Forma 3**, definimos o comprimento da array como `0`. Isso faz com que todos os elementos da array sejam removidos.

Todas as três formas produzem o mesmo resultado: uma array vazia.