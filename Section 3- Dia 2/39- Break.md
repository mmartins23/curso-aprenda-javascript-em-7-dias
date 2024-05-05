# Break

Em JavaScript, a declaração `break` é usada para sair de loops (`for`, `while`, `do...while`, `switch`) prematuramente. Aqui está um exemplo de como o `break` pode ser usado em diferentes tipos de loops:

### Exemplo com `for` loop

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
```

**Saída:**
```
0
1
2
```

### Exemplo com `while` loop

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  if (i === 2) {
    break;
  }
  i++;
}
```

**Saída:**
```
0
1
2
```

### Exemplo com `do...while` loop

```javascript
let i = 0;
do {
  console.log(i);
  if (i === 1) {
    break;
  }
  i++;
} while (i < 5);
```

**Saída:**
```
0
1
```

### Exemplo com `switch` statement

```javascript
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's Monday!");
    break;
  case "Tuesday":
    console.log("It's Tuesday!");
    break;
  case "Wednesday":
    console.log("It's Wednesday!");
    break;
  default:
    console.log("It's another day of the week!");
}
```

**Saída:**
```
It's Monday!
```

Neste exemplo, o `break` é usado para sair do `switch` depois de encontrar a correspondência adequada. Se o `break` não fosse usado, o código continuaria a ser executado para os casos seguintes.