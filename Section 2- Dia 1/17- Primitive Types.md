# Primitive Types

Em JavaScript, existem seis tipos de dados primitivos:

1. **Number**: Representa números, inteiros ou em ponto flutuante (decimais). Exemplo: `let idade = 25;`.

2. **String**: Representa sequências de caracteres. Podem ser delimitadas por aspas simples (`'`) ou duplas (`"`). Exemplo: `let nome = "Maria";`.

3. **Boolean**: Representa um valor lógico, verdadeiro (`true`) ou falso (`false`). Exemplo: `let isAdulto = true;`.

4. **Null**: Representa um valor nulo ou vazio. Exemplo: `let valor = null;`.

5. **Undefined**: Representa uma variável que foi declarada, mas ainda não recebeu um valor. Exemplo: `let pessoa;`.

6. **Symbol**: Introduzido no ECMAScript 6 (ES6), representa um tipo de dado único e imutável, frequentemente usado para criar identificadores únicos para objetos. Exemplo: `const chave = Symbol();`.

Aqui estão alguns exemplos de como esses tipos primitivos são utilizados em JavaScript:

```javascript
// Number
let idade = 25;
let preco = 9.99;

// String
let nome = "João";
let mensagem = 'Olá, mundo!';

// Boolean
let isAdulto = true;
let isAtivo = false;

// Null
let valor = null;

// Undefined
let pessoa;
console.log(pessoa); // Saída: undefined

// Symbol
const chave = Symbol();
console.log(chave); // Saída: Symbol()
```

Esses tipos primitivos são a base da linguagem JavaScript e são usados para representar valores simples. Além desses, JavaScript também possui tipos de dados compostos, como arrays e objetos, que são usados para representar conjuntos de valores e estruturas mais complexas.