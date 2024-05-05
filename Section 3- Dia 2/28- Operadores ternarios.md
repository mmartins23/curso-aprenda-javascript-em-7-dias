# Operadores ternarios

Os operadores ternários em JavaScript oferecem uma maneira concisa de escrever instruções condicionais. Eles são frequentemente usados como uma alternativa mais compacta ao `if...else`. Aqui está como eles funcionam:

```javascript
condição ? expressão1 : expressão2
```

Se a condição for verdadeira, a expressão1 é avaliada; se for falsa, a expressão2 é avaliada.

Aqui está um exemplo de código usando o operador ternário:

```javascript
let idade = 20;
let status = (idade >= 18) ? 'adulto' : 'menor';
console.log(status); // Saída: adulto
```

Neste exemplo, se a idade for maior ou igual a 18, a variável `status` receberá o valor 'adulto', caso contrário, receberá o valor 'menor'.

Você também pode aninhar operadores ternários para criar instruções condicionais mais complexas:

```javascript
let velocidade = 70;
let limite = 60;
let mensagem = (velocidade > limite) ? 'Você ultrapassou o limite de velocidade' : (velocidade === limite) ? 'Você está na velocidade limite' : 'Você está dentro do limite de velocidade';
console.log(mensagem); // Saída: Você ultrapassou o limite de velocidade
```

Neste exemplo, a mensagem será diferente dependendo da velocidade em relação ao limite de velocidade.

Os operadores ternários são uma maneira eficiente e concisa de escrever instruções condicionais simples em JavaScript.