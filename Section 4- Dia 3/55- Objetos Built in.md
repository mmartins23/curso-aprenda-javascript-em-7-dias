# Objetos Built in

Em JavaScript, existem vários tipos de objetos "built-in" (integrados) que são fornecidos pela linguagem e estão disponíveis globalmente. Aqui estão alguns dos objetos "built-in" mais comuns em JavaScript, juntamente com exemplos de código:

### 1. Objeto `String`:

O objeto `String` é usado para manipular cadeias de caracteres.

Exemplo:
```javascript
let str = "Olá, mundo!";
console.log(str.length); // Saída: 12
console.log(str.toUpperCase()); // Saída: OLÁ, MUNDO!
```

### 2. Objeto `Array`:

O objeto `Array` é usado para armazenar múltiplos valores em uma única variável.

Exemplo:
```javascript
let frutas = ['Maçã', 'Banana', 'Laranja'];
console.log(frutas.length); // Saída: 3
console.log(frutas[0]); // Saída: Maçã
```

### 3. Objeto `Math`:

O objeto `Math` fornece propriedades e métodos para realizar operações matemáticas.

Exemplo:
```javascript
console.log(Math.PI); // Saída: 3.141592653589793
console.log(Math.sqrt(25)); // Saída: 5
```

### 4. Objeto `Date`:

O objeto `Date` é usado para trabalhar com datas e horários.

Exemplo:
```javascript
let hoje = new Date();
console.log(hoje); // Saída: data e hora atuais
```

### 5. Objeto `RegExp`:

O objeto `RegExp` é usado para trabalhar com expressões regulares.

Exemplo:
```javascript
let regExp = /[a-zA-Z]+/;
console.log(regExp.test("Hello")); // Saída: true
console.log(regExp.test("123")); // Saída: false
```

### 6. Objeto `Object`:

O objeto `Object` é a base de todos os outros objetos em JavaScript.

Exemplo:
```javascript
let pessoa = {
  nome: 'João',
  idade: 30
};
console.log(pessoa.nome); // Saída: João
console.log(pessoa.idade); // Saída: 30
```

Estes são apenas alguns exemplos dos muitos objetos "built-in" que JavaScript fornece. Cada um desses objetos tem seus próprios métodos e propriedades para realizar diferentes tipos de operações.