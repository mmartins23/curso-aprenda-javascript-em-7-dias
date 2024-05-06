# Concatenando uma Array

O método `concat()` em JavaScript é usado para concatenar duas ou mais arrays, criando uma nova array que contém os elementos das arrays originais. Aqui está como você pode usar o método `concat()`:

```javascript
// Criando duas arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// Concatenando as duas arrays usando o método concat()
let arrayConcatenada = array1.concat(array2);

console.log(arrayConcatenada); // Saída: [1, 2, 3, 4, 5, 6]
```

No exemplo acima:

- `array1` contém os elementos `[1, 2, 3]`.
- `array2` contém os elementos `[4, 5, 6]`.
- `arrayConcatenada` contém a concatenação de `array1` e `array2`, ou seja, `[1, 2, 3, 4, 5, 6]`.

O método `concat()` não altera as arrays originais; ele retorna uma nova array que contém os elementos concatenados.

Você também pode concatenar mais de duas arrays passando-as como argumentos adicionais para o método `concat()`:

```javascript
let array1 = [1, 2];
let array2 = [3, 4];
let array3 = [5, 6];

let arrayConcatenada = array1.concat(array2, array3);

console.log(arrayConcatenada); // Saída: [1, 2, 3, 4, 5, 6]
```

Espero que isso esclareça como usar o método `concat()` para concatenar arrays em JavaScript!