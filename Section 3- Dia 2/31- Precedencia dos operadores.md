# Precedencia dos operadores

Em JavaScript, assim como em muitas outras linguagens de programação, os operadores têm precedências diferentes. A precedência determina a ordem na qual os operadores são avaliados em uma expressão. Aqui está uma lista dos operadores em JavaScript organizados de maior para menor precedência:

1. `()` (parênteses) - Altera a ordem de avaliação de uma expressão.
2. `!` (NOT) - Operador de negação lógica.
3. `*`, `/`, `%` - Operadores de multiplicação, divisão e resto da divisão.
4. `+`, `-` - Operadores de adição e subtração.
5. `<`, `<=`, `>`, `>=` - Operadores de comparação.
6. `===`, `!==`, `==`, `!=` - Operadores de igualdade.
7. `&&` - Operador lógico AND.
8. `||` - Operador lógico OR.

Aqui estão alguns exemplos de como a precedência dos operadores funciona em JavaScript:

```javascript
// Exemplo 1: Precedência de operadores aritméticos e de comparação
let resultado = 10 + 5 * 2; // Multiplicação é feita primeiro, depois a adição
console.log(resultado); // Saída: 20

resultado = (10 + 5) * 2; // Os parênteses têm a maior precedência
console.log(resultado); // Saída: 30

let maior = 10 > 5 + 5; // Adição é feita primeiro, depois a comparação
console.log(maior); // Saída: false

// Exemplo 2: Precedência de operadores lógicos
let a = true;
let b = false;
let c = true;

let resultado_logico = a || b && c; // && tem precedência sobre ||
console.log(resultado_logico); // Saída: true
```

Lembre-se de que, quando em dúvida sobre a ordem de avaliação de uma expressão, é sempre uma boa prática usar parênteses para tornar a sua intenção explícita. Isso torna o código mais legível e menos suscetível a erros de interpretação.