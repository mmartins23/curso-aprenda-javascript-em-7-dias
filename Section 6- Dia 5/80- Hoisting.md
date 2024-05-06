# Hoisting

Hoisting é um comportamento em JavaScript onde declarações de variáveis e funções são movidas para o topo de seus escopos durante a fase de compilação. Isso significa que você pode usar uma variável ou função antes de ela ser declarada no código. No entanto, apenas a declaração é movida para o topo, não a inicialização.

### Exemplo de Hoisting com Variáveis:

```javascript
console.log(x); // Saída: undefined
var x = 5;
console.log(x); // Saída: 5
```

No código acima, mesmo que a variável `x` seja usada antes de ser declarada, não há erro. Isso ocorre porque a declaração `var x;` é elevada para o topo do escopo. No entanto, a inicialização (`x = 5;`) não é movida para o topo, então `console.log(x);` imprime `undefined`.

### Exemplo de Hoisting com Funções:

```javascript
hello(); // Saída: "Olá, mundo!"

function hello() {
  console.log("Olá, mundo!");
}
```

No código acima, a função `hello()` é chamada antes de ser declarada, mas não há erro. Isso ocorre porque a declaração da função é movida para o topo do escopo. Isso é chamado de "hoisting de função".

### Exemplo de Hoisting com Funções em Expressões:

```javascript
hello(); // Erro: hello is not a function

var hello = function() {
  console.log("Olá, mundo!");
};
```

No código acima, ocorre um erro porque o hoisting não ocorre com a função atribuída a uma variável. A declaração da variável `hello` é movida para o topo, mas a atribuição da função não é, então `hello` é `undefined` quando a função é chamada.

### Hoisting com `let` e `const`:

```javascript
console.log(x); // Erro: Cannot access 'x' before initialization
let x = 5;
```

Com `let` e `const`, o hoisting não ocorre da mesma forma que com `var`. Tentar acessar uma variável `let` ou `const` antes de sua declaração resultará em um erro.

### Conclusão:

O hoisting em JavaScript é um comportamento que move declarações para o topo de seus escopos durante a fase de compilação. É importante lembrar que apenas a declaração é movida, não a inicialização.

Espero que isso ajude a entender o conceito de hoisting em JavaScript!