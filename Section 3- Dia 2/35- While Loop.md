# While Loop

O loop `while` é uma estrutura de controle de fluxo que permite executar um bloco de código repetidamente enquanto uma condição especificada for verdadeira. Aqui está como ele funciona com exemplos:

### While Loop Simples

O loop `while` executa um bloco de código enquanto uma condição especificada for verdadeira.

```javascript
let contador = 0;

while (contador < 5) {
  console.log("O contador é: " + contador);
  contador++;
}
```

### While Loop com Condição Complexa

A condição em um `while` loop pode ser tão complexa quanto necessário.

```javascript
let numero = 0;

while (numero < 100 && numero % 7 !== 0) {
  console.log("Número atual: " + numero);
  numero++;
}
```

### While Loop com Array

Você também pode usar um `while` loop para percorrer todos os elementos de um array.

```javascript
let frutas = ["Maçã", "Banana", "Laranja", "Morango"];
let i = 0;

while (i < frutas.length) {
  console.log("Eu gosto de " + frutas[i]);
  i++;
}
```

### Do...While Loop

O `do...while` loop é semelhante ao `while` loop, exceto que a condição é verificada após a execução do bloco de código, garantindo que o bloco seja executado pelo menos uma vez.

```javascript
let contador = 0;

do {
  console.log("O contador é: " + contador);
  contador++;
} while (contador < 0);
```

O `while` loop possui uma única parte:

- **Condição**: Define a condição para continuar o loop.

Esses são exemplos básicos de como usar o loop `while` em JavaScript para repetir blocos de código enquanto uma condição for verdadeira.