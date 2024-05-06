# O que sao Arrays

Em JavaScript, um array é uma estrutura de dados que permite armazenar múltiplos valores em uma única variável. Os valores no array são acessados através de um índice numérico, começando do zero. Aqui está uma explicação sobre arrays em JavaScript com exemplos de código:

### Exemplo de Array em JavaScript:

```javascript
// Criando um array de números
let numeros = [1, 2, 3, 4, 5];

// Acessando elementos do array
console.log(numeros[0]); // Saída: 1
console.log(numeros[2]); // Saída: 3

// Alterando um elemento do array
numeros[1] = 10;
console.log(numeros); // Saída: [1, 10, 3, 4, 5]

// Adicionando um novo elemento ao array
numeros.push(6);
console.log(numeros); // Saída: [1, 10, 3, 4, 5, 6]

// Removendo o último elemento do array
numeros.pop();
console.log(numeros); // Saída: [1, 10, 3, 4, 5]
```

### Explicação:

- Um array em JavaScript é criado usando colchetes `[]` e os elementos do array são separados por vírgulas.
- Os elementos do array podem ser de qualquer tipo de dado, incluindo números, strings, objetos, ou até mesmo outros arrays.
- Os elementos do array são acessados usando índices numéricos, começando do zero.
- Você pode modificar um elemento do array atribuindo um novo valor a ele.
- O método `push()` é usado para adicionar um novo elemento ao final do array.
- O método `pop()` é usado para remover o último elemento do array.

Arrays são uma parte fundamental da programação em JavaScript e são amplamente utilizados para armazenar e manipular conjuntos de dados.