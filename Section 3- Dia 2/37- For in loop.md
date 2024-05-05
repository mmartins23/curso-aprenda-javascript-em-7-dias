# For in loop

O loop `for...in` em JavaScript é usado para iterar sobre as propriedades enumeráveis de um objeto. Aqui está uma explicação com exemplos de código e suas saídas:

### Definição

O loop `for...in` é usado para iterar sobre todas as propriedades enumeráveis de um objeto.

### Exemplo com Objeto

```javascript
let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020
};

for (let chave in carro) {
  console.log(chave + ": " + carro[chave]);
}
```

**Saída:**
```
marca: Toyota
modelo: Corolla
ano: 2020
```

### Exemplo com Array

```javascript
let frutas = ["Maçã", "Banana", "Laranja", "Morango"];

for (let indice in frutas) {
  console.log("Índice " + indice + ": " + frutas[indice]);
}
```

**Saída:**
```
Índice 0: Maçã
Índice 1: Banana
Índice 2: Laranja
Índice 3: Morango
```

### Exemplo com String

```javascript
let nome = "JavaScript";

for (let indice in nome) {
  console.log("Caractere " + indice + ": " + nome[indice]);
}
```

**Saída:**
```
Caractere 0: J
Caractere 1: a
Caractere 2: v
Caractere 3: a
Caractere 4: S
Caractere 5: c
Caractere 6: r
Caractere 7: i
Caractere 8: p
Caractere 9: t
Caractere 10: Language
```

### Exemplo com Verificação de Propriedades Herdadas

```javascript
let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020
};

// Adicionando uma propriedade herdada
Object.prototype.tipo = "Sedan";

for (let chave in carro) {
  if (carro.hasOwnProperty(chave)) {
    console.log(chave + ": " + carro[chave]);
  }
}
```

**Saída:**
```
marca: Toyota
modelo: Corolla
ano: 2020
```

Neste exemplo, o loop `for...in` itera sobre as propriedades do objeto `carro`, mas usando `hasOwnProperty()` para verificar se a propriedade é diretamente do objeto ou se foi herdada. A propriedade herdada `"tipo"` não é incluída na saída.