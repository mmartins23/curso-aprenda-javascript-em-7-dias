# Constant

Em JavaScript, a palavra-chave `const` é usada para declarar uma variável cujo valor não pode ser alterado após a sua inicialização. Em outras palavras, uma vez que você atribui um valor a uma constante, esse valor não pode ser modificado posteriormente durante a execução do programa.

Aqui está um exemplo simples de como usar `const`:

```javascript
const pi = 3.14159;
console.log(pi); // Saída: 3.14159
```

Neste exemplo, `pi` é uma constante que armazena o valor de π (pi). Uma vez que `pi` foi inicializado com um valor, qualquer tentativa de atribuir um novo valor a ela resultará em um erro:

```javascript
const pi = 3.14159;
pi = 3.14; // Isso irá gerar um erro!
```

As constantes têm escopo de bloco, assim como as variáveis declaradas com `let`. Isso significa que elas só são acessíveis dentro do bloco em que foram declaradas. Por exemplo:

```javascript
{
  const x = 10;
  console.log(x); // Saída: 10
}

console.log(x); // Isso irá gerar um erro, pois 'x' não está definido neste escopo
```

É importante notar que, ao contrário de algumas outras linguagens de programação, o uso de `const` em JavaScript não impede que o valor armazenado na constante seja modificado se esse valor for um objeto. Por exemplo:

```javascript
const pessoa = { nome: "João", idade: 30 };
pessoa.idade = 31; // Isso é permitido e não gera erro
console.log(pessoa); // Saída: { nome: "João", idade: 31 }
```

Neste caso, embora a constante `pessoa` continue apontando para o mesmo objeto, o conteúdo desse objeto pode ser modificado sem problemas. No entanto, você não pode atribuir uma nova referência a `pessoa`, ou seja, você não pode fazer `pessoa = { nome: "Maria", idade: 25 };`, pois isso geraria um erro.

Em resumo, `const` em JavaScript é usado para declarar constantes que não mudam de valor após a sua inicialização.