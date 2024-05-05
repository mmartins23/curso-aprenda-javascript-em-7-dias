# Operadores logicos com Strings

Em JavaScript, os operadores lógicos também podem ser usados com strings. Aqui estão alguns exemplos de como os operadores lógicos funcionam com strings:

### Operador AND (`&&`) com Strings

O operador AND (`&&`) com strings retorna `true` se ambas as strings forem consideradas `true` (ou seja, não vazias), caso contrário, retorna `false`.

Exemplo:

```javascript
let string1 = "hello";
let string2 = "world";

// Verifica se ambas as strings não estão vazias
if (string1 && string2) {
  console.log("Ambas as strings não estão vazias");
} else {
  console.log("Pelo menos uma das strings está vazia");
}
```

### Operador OR (`||`) com Strings

O operador OR (`||`) com strings retorna `true` se pelo menos uma das strings for considerada `true` (ou seja, não vazia).

Exemplo:

```javascript
let string1 = "";
let string2 = "world";

// Verifica se pelo menos uma das strings não está vazia
if (string1 || string2) {
  console.log("Pelo menos uma das strings não está vazia");
} else {
  console.log("Ambas as strings estão vazias");
}
```

### Operador NOT (`!`) com Strings

O operador NOT (`!`) com strings inverte o valor de uma string. Se a string for vazia, o operador NOT a torna `true`, caso contrário, retorna `false`.

Exemplo:

```javascript
let string1 = "";

// Verifica se a string está vazia
if (!string1) {
  console.log("A string está vazia");
} else {
  console.log("A string não está vazia");
}
```

Estes são exemplos básicos do uso de operadores lógicos com strings em JavaScript.