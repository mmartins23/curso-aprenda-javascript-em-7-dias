# Revertendo a sua Array

Aqui está uma explicação sobre como funcionam os métodos `sort()` e `reverse()` em JavaScript, junto com exemplos de código:

### Método `sort()`:

O método `sort()` classifica os elementos de uma array e retorna a array classificada. Por padrão, a ordenação é alfabética e em ordem crescente quando chamada sem argumentos.

#### Exemplo:

```javascript
// Criando uma array de frutas
let frutas = ['Maçã', 'Banana', 'Laranja', 'Abacaxi'];

// Usando o método sort() para ordenar a array em ordem alfabética
frutas.sort();

console.log(frutas); // Saída: ['Abacaxi', 'Banana', 'Laranja', 'Maçã']
```

No exemplo acima, a array `frutas` foi ordenada em ordem alfabética usando o método `sort()`.

### Método `reverse()`:

O método `reverse()` inverte a ordem dos elementos em uma array. O primeiro elemento se torna o último e o último se torna o primeiro.

#### Exemplo:

```javascript
// Criando uma array de números
let numeros = [1, 2, 3, 4, 5];

// Usando o método reverse() para inverter a ordem dos elementos na array
numeros.reverse();

console.log(numeros); // Saída: [5, 4, 3, 2, 1]
```

No exemplo acima, a array `numeros` foi invertida usando o método `reverse()`.

### Combinando `sort()` e `reverse()`:

Você pode combinar `sort()` e `reverse()` para classificar uma array em ordem decrescente.

#### Exemplo:

```javascript
// Criando uma array de números
let numeros = [5, 2, 9, 1, 7];

// Usando o método sort() para ordenar a array em ordem crescente e reverse() para inverter a ordem
numeros.sort().reverse();

console.log(numeros); // Saída: [9, 7, 5, 2, 1]
```

No exemplo acima, a array `numeros` foi classificada em ordem crescente usando `sort()` e depois invertida usando `reverse()`, resultando na ordenação em ordem decrescente.

Espero que isso ajude a entender como os métodos `sort()` e `reverse()` funcionam em JavaScript!