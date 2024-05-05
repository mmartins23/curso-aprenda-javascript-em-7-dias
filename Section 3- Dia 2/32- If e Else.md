# If e Else

Em JavaScript, `if` e `else` são estruturas de controle de fluxo que permitem que você execute diferentes blocos de código dependendo de uma condição. Aqui está como eles funcionam com exemplos:

### If

O `if` é usado para executar um bloco de código se a condição especificada for verdadeira.

```javascript
let idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade.");
}
```

### Else

O `else` é usado em conjunto com o `if` para executar um bloco de código se a condição do `if` for falsa.

```javascript
let idade = 16;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}
```

### If...Else if...Else

Você também pode encadear várias condições usando `else if` se tiver mais de duas possibilidades.

```javascript
let nota = 75;

if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else {
  console.log("D");
}
```

### If Ternário

O operador ternário (`? :`) é uma forma concisa de escrever instruções `if...else`.

```javascript
let idade = 16;
let status = (idade >= 18) ? "Maior de idade" : "Menor de idade";
console.log(status);
```

Esses são exemplos básicos de como usar `if`, `else`, `else if` e o operador ternário em JavaScript para controlar o fluxo do seu código.