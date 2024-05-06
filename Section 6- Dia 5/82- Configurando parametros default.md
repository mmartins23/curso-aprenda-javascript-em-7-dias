# Configurando parametros default

Em JavaScript, você pode definir valores padrão para os parâmetros de uma função usando a sintaxe de atribuição de parâmetro padrão. Isso permite que você atribua um valor padrão a um parâmetro caso nenhum valor seja passado para ele quando a função é chamada. Aqui está como configurar parâmetros padrão em JavaScript:

### Exemplo:

```javascript
function saudacao(nome = 'Mundo') {
  return 'Olá, ' + nome + '!';
}

console.log(saudacao()); // Saída: Olá, Mundo!
console.log(saudacao('João')); // Saída: Olá, João!
```

Neste exemplo, o parâmetro `nome` da função `saudacao()` tem um valor padrão de `'Mundo'`. Se nenhum valor for passado para o parâmetro `nome`, ele será automaticamente configurado como `'Mundo'`. Se um valor for passado, ele substituirá o valor padrão.

### Parâmetros Múltiplos com Valores Padrão:

```javascript
function boasVindas(nome = 'Mundo', idioma = 'pt') {
  if (idioma === 'pt') {
    return 'Olá, ' + nome + '!';
  } else if (idioma === 'en') {
    return 'Hello, ' + nome + '!';
  } else {
    return 'Não reconheço esse idioma!';
  }
}

console.log(boasVindas()); // Saída: Olá, Mundo!
console.log(boasVindas('João')); // Saída: Olá, João!
console.log(boasVindas('John', 'en')); // Saída: Hello, John!
console.log(boasVindas('Juan', 'es')); // Saída: Não reconheço esse idioma!
```

Neste exemplo, a função `boasVindas()` aceita dois parâmetros, `nome` e `idioma`, com valores padrão de `'Mundo'` e `'pt'` respectivamente. Se nenhum valor for passado para `nome`, `'Mundo'` será usado como valor padrão. Da mesma forma, se nenhum valor for passado para `idioma`, `'pt'` será usado como valor padrão.

Espero que isso ajude!