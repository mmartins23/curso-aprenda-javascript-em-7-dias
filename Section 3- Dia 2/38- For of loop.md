# For of loop

O loop `for...of` em JavaScript é usado para iterar sobre objetos iteráveis ​​(como arrays, strings, mapas, conjuntos, etc.). Aqui está uma explicação com exemplos de código:

### Exemplo com Array

```javascript
let fruits = ["Apple", "Banana", "Orange", "Strawberry"];

for (let fruit of fruits) {
  console.log(fruit);
}
```

**Saída:**
```
Apple
Banana
Orange
Strawberry
```

### Exemplo com String

```javascript
let name = "JavaScript";

for (let character of name) {
  console.log(character);
}
```

**Saída:**
```
J
a
v
a
S
c
r
i
p
t
L
a
n
g
u
a
g
e
```

### Exemplo com Mapa

```javascript
let map = new Map();
map.set(1, "One");
map.set(2, "Two");
map.set(3, "Three");

for (let [key, value] of map) {
  console.log(key, value);
}
```

**Saída:**
```
1 "One"
2 "Two"
3 "Three"
```

### Exemplo com Conjunto

```javascript
let set = new Set(["apple", "banana", "orange", "strawberry"]);

for (let fruit of set) {
  console.log(fruit);
}
```

**Saída:**
```
apple
banana
orange
strawberry
```

### Exemplo com Argumentos de Função

```javascript
function sum() {
  let result = 0;
  for (let num of arguments) {
    result += num;
  }
  return result;
}

console.log(sum(1, 2, 3, 4, 5)); // Saída: 15
```

O loop `for...of` é uma maneira simples e limpa de iterar sobre elementos de uma variedade de tipos de coleções em JavaScript. Ele percorre os elementos em ordem crescente de índice, ignorando propriedades não numeradas.