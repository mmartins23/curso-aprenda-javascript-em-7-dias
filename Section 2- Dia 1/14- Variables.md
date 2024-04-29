# Variables

Variáveis em JavaScript são usadas para armazenar dados temporários que podem ser modificados ao longo da execução do programa. Elas são como recipientes que mantêm valores que podem ser referenciados e manipulados pelo código.

Em JavaScript, você pode declarar variáveis usando as palavras-chave `var`, `let`, ou `const`. Aqui está uma explicação de cada uma:

1. **var**: Era a forma tradicional de declarar variáveis em JavaScript antes do ECMAScript 6 (também conhecido como ES6). As variáveis declaradas com `var` têm escopo de função ou escopo global, dependendo de onde são declaradas. No entanto, elas não têm escopo de bloco, o que significa que podem causar problemas devido ao hoisting (elevação). O hoisting faz com que as declarações de variáveis com `var` sejam movidas para o topo do escopo em que estão, independentemente de onde a declaração ocorra.

2. **let**: Foi introduzido no ES6 e é preferido sobre `var` na maioria dos casos. Variáveis declaradas com `let` têm escopo de bloco, o que significa que são acessíveis apenas dentro do bloco em que são declaradas. Elas não sofrem com o hoisting como as variáveis `var`.

3. **const**: Também foi introduzido no ES6 e é usado para declarar constantes, ou seja, variáveis cujo valor não pode ser alterado após a sua atribuição inicial. Assim como `let`, as variáveis `const` também têm escopo de bloco.

Além disso, em JavaScript, as variáveis podem armazenar diferentes tipos de dados, como números, strings, booleanos, arrays, objetos e até mesmo funções. Você não precisa declarar explicitamente o tipo de uma variável ao criá-la; o tipo é inferido automaticamente com base no valor atribuído a ela.

Por exemplo:
```javascript
let idade = 25; // número
let nome = "Maria"; // string
let isAdulto = true; // booleano
let numeros = [1, 2, 3, 4, 5]; // array
let pessoa = { nome: "João", idade: 30 }; // objeto
let saudacao = function() { console.log("Olá!"); }; // função
```

Essas são as bases sobre variáveis em JavaScript. Elas são fundamentais para armazenar e manipular dados durante a execução de um programa JavaScript.