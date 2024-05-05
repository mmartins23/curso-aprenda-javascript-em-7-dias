# Do While loop

O loop `do...while` é uma estrutura de controle de fluxo que permite executar um bloco de código pelo menos uma vez e depois repeti-lo enquanto uma condição especificada for verdadeira. Aqui está como ele funciona com exemplos:

### Do...While Loop Simples

O `do...while` loop executa um bloco de código uma vez e depois repete o loop enquanto uma condição especificada for verdadeira.

```javascript
let contador = 0;

do {
  console.log("O contador é: " + contador);
  contador++;
} while (contador < 5);
```

### Do...While Loop com Array

Você também pode usar um `do...while` loop para percorrer todos os elementos de um array.

```javascript
let frutas = ["Maçã", "Banana", "Laranja", "Morango"];
let i = 0;

do {
  console.log("Eu gosto de " + frutas[i]);
  i++;
} while (i < frutas.length);
```

### Garantindo que o Loop seja Executado Pelo Menos uma Vez

O `do...while` loop garante que o bloco de código seja executado pelo menos uma vez, mesmo se a condição for falsa.

```javascript
let numero = 0;

do {
  console.log("Número atual: " + numero);
  numero++;
} while (numero > 10);
```

O `do...while` loop possui uma única parte:

- **Condição**: Define a condição para continuar o loop.

Esses são exemplos básicos de como usar o loop `do...while` em JavaScript para repetir blocos de código enquanto uma condição for verdadeira, garantindo que o bloco seja executado pelo menos uma vez.