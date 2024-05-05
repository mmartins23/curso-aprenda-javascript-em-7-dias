# Operadores logicos

Em JavaScript, os operadores lógicos são usados para combinar expressões booleanas e produzir um resultado booleano. Existem três operadores lógicos principais em JavaScript: `&&` (AND), `||` (OR) e `!` (NOT).

Aqui estão exemplos de como esses operadores funcionam:

### Operador AND (`&&`)

O operador AND retorna `true` se ambos os operandos forem `true`, caso contrário, retorna `false`.

Exemplo:

```javascript
let x = 5;
let y = 10;

// Verifica se x é maior que 0 E y é maior que 0
if (x > 0 && y > 0) {
  console.log("Ambos x e y são positivos");
} else {
  console.log("Pelo menos um dos números não é positivo");
}
```

### Operador OR (`||`)

O operador OR retorna `true` se pelo menos um dos operandos for `true`, caso contrário, retorna `false`.

Exemplo:

```javascript
let idade = 25;
let temCarteiraDeMotorista = false;

// Verifica se a pessoa tem mais de 18 anos OU se tem carteira de motorista
if (idade >= 18 || temCarteiraDeMotorista) {
  console.log("A pessoa pode dirigir");
} else {
  console.log("A pessoa não pode dirigir");
}
```

### Operador NOT (`!`)

O operador NOT inverte o valor de uma expressão booleana. Se a expressão for `true`, o operador NOT a torna `false`, e vice-versa.

Exemplo:

```javascript
let chuva = true;

// Verifica se não está chovendo
if (!chuva) {
  console.log("Não está chovendo. Pode sair.");
} else {
  console.log("Está chovendo. Melhor ficar em casa.");
}
```

Estes são exemplos básicos do uso de operadores lógicos em JavaScript.