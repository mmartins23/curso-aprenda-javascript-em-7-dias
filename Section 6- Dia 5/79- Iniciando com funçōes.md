# Iniciando com funçōes

Em JavaScript, existem duas formas principais de definir funções: **Function Declaration** e **Function Expression**. Aqui estão as diferenças entre elas, juntamente com exemplos de código:

### Function Declaration:

Na declaração de função, você usa a palavra-chave `function` seguida pelo nome da função.

#### Exemplo:

```javascript
// Function Declaration
function soma(a, b) {
  return a + b;
}

console.log(soma(2, 3)); // Saída: 5
```

### Function Expression:

Na expressão de função, você pode atribuir uma função a uma variável. A função pode ser anônima (sem nome) ou nomeada.

#### Exemplos:

1. **Função anônima:**

```javascript
// Função anônima (Function Expression)
let soma = function(a, b) {
  return a + b;
};

console.log(soma(2, 3)); // Saída: 5
```

2. **Função nomeada:**

```javascript
// Função nomeada (Function Expression)
let soma = function soma(a, b) {
  return a + b;
};

console.log(soma(2, 3)); // Saída: 5
```

### Principais diferenças:

1. **Hoisting:**
   - As declarações de função (`Function Declaration`) são elevadas (hoisted) para o topo do escopo, o que significa que você pode chamar a função antes de declará-la no código.
   - As expressões de função (`Function Expression`) não são elevadas, então você só pode chamar a função após atribuí-la a uma variável.

#### Exemplo de Hoisting com Function Declaration:

```javascript
console.log(soma(2, 3)); // Saída: 5

function soma(a, b) {
  return a + b;
}
```

Este código funciona mesmo que a função seja chamada antes de ser declarada, devido ao hoisting.

#### Exemplo de sem Hoisting com Function Expression:

```javascript
console.log(soma(2, 3)); // Erro: soma is not a function

let soma = function(a, b) {
  return a + b;
};
```

Este código resultará em um erro, pois a função é uma expressão e não é elevada para o topo do escopo.

2. **Reatribuição:**
   - No caso da função expressa, você pode reatribuir a variável a uma nova função.
   - No caso da declaração de função, você não pode reatribuir a função a uma nova função.

#### Exemplo de Reatribuição com Function Expression:

```javascript
let soma = function(a, b) {
  return a + b;
};

console.log(soma(2, 3)); // Saída: 5

// Reatribuindo a função
soma = function(a, b) {
  return a * b;
};

console.log(soma(2, 3)); // Saída: 6
```

#### Exemplo de Reatribuição com Function Declaration:

```javascript
function soma(a, b) {
  return a + b;
}

console.log(soma(2, 3)); // Saída: 5

// Tentativa de reatribuir a função (irá gerar um erro)
soma = function(a, b) {
  return a * b;
};

console.log(soma(2, 3));
```

Espero que isso ajude a esclarecer as diferenças entre `Function Declaration` e `Function Expression` em JavaScript!