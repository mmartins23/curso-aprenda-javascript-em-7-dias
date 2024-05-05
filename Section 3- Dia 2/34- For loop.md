# For loop

O loop `for` é uma estrutura de controle de fluxo que permite executar um bloco de código repetidamente. Aqui está como ele funciona com exemplos:

### For Loop Simples

O loop `for` é geralmente usado quando você sabe exatamente quantas vezes deseja que o loop seja executado.

```javascript
for (let i = 0; i < 5; i++) {
  console.log("O valor de i é: " + i);
}
```

### For Loop com Arrays

Você também pode usar um loop `for` para percorrer todos os elementos de um array.

```javascript
let frutas = ["Maçã", "Banana", "Laranja", "Morango"];

for (let i = 0; i < frutas.length; i++) {
  console.log("Eu gosto de " + frutas[i]);
}
```

### For...In Loop

O `for...in` loop é usado para iterar sobre as propriedades de um objeto.

```javascript
let carro = {marca: "Toyota", modelo: "Corolla", ano: 2020};

for (let chave in carro) {
  console.log(chave + ": " + carro[chave]);
}
```

### For...Of Loop

O `for...of` loop é uma maneira mais simples de iterar sobre os elementos de um array.

```javascript
let frutas = ["Maçã", "Banana", "Laranja", "Morango"];

for (let fruta of frutas) {
  console.log("Eu gosto de " + fruta);
}
```

### For Loop Decrescente

Você também pode usar um loop `for` para contar de trás para frente.

```javascript
for (let i = 5; i > 0; i--) {
  console.log("O valor de i é: " + i);
}
```

O `for` loop possui três partes:

- **Inicialização (`let i = 0`)**: Inicializa o contador do loop.
- **Condição (`i < 5`)**: Define a condição para continuar o loop.
- **Incremento (`i++`)**: Incrementa o contador do loop após cada iteração.

Esses são exemplos básicos de como usar o loop `for` em JavaScript para repetir blocos de código.
