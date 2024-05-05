# Switch e Case

Em JavaScript, `switch` e `case` são estruturas de controle de fluxo que permitem executar diferentes blocos de código dependendo do valor de uma expressão. Aqui está como eles funcionam com exemplos:

### Switch

O `switch` é usado para selecionar uma das muitas maneiras diferentes de se fazer algo.

```javascript
let diaDaSemana = 3;
let nomeDoDia;

switch (diaDaSemana) {
  case 1:
    nomeDoDia = "Domingo";
    break;
  case 2:
    nomeDoDia = "Segunda-feira";
    break;
  case 3:
    nomeDoDia = "Terça-feira";
    break;
  case 4:
    nomeDoDia = "Quarta-feira";
    break;
  case 5:
    nomeDoDia = "Quinta-feira";
    break;
  case 6:
    nomeDoDia = "Sexta-feira";
    break;
  case 7:
    nomeDoDia = "Sábado";
    break;
  default:
    nomeDoDia = "Dia inválido";
}

console.log("Hoje é " + nomeDoDia);
```

### Case

`case` é usado dentro de um `switch` para especificar diferentes ações a serem tomadas com base no valor de uma expressão.

```javascript
let cor = "vermelho";
let mensagem;

switch (cor) {
  case "vermelho":
    mensagem = "A cor é vermelho";
    break;
  case "azul":
    mensagem = "A cor é azul";
    break;
  case "verde":
    mensagem = "A cor é verde";
    break;
  default:
    mensagem = "Não reconheço esta cor";
}

console.log(mensagem);
```

`break` é usado para sair de um `switch` depois que uma correspondência for encontrada.

O `default` é opcional e é executado se nenhum dos casos corresponder ao valor da expressão.

Esses são exemplos básicos de como usar `switch` e `case` em JavaScript para controlar o fluxo do seu código.