# Sobre o Garbage Collector

O Garbage Collector é um mecanismo em JavaScript responsável por gerenciar a alocação e desalocação de memória, liberando automaticamente a memória ocupada por objetos que não estão mais em uso. Aqui está uma explicação sobre como o Garbage Collector funciona em JavaScript, juntamente com exemplos de código:

### Exemplo 1: Objeto inacessível

```javascript
// Um objeto é criado e atribuído à variável 'obj'
let obj = { name: 'John' };

// A variável 'obj' é definida como null, tornando o objeto inacessível
obj = null;

// O Garbage Collector detecta que o objeto não é mais acessível e libera a memória alocada por ele
```

### Explicação:

- Um objeto é criado e atribuído à variável `obj`.
- A variável `obj` é definida como `null`, tornando o objeto inacessível.
- O Garbage Collector detecta que o objeto não é mais acessível e libera a memória alocada por ele.

### Exemplo 2: Referência Circular

```javascript
let obj1 = {};
let obj2 = {};

// Criando uma referência circular entre os objetos
obj1.obj2 = obj2;
obj2.obj1 = obj1;

// Removendo as referências
obj1 = null;
obj2 = null;

// Os objetos não são mais acessíveis, mesmo que um faça referência ao outro
// O Garbage Collector detecta a referência circular e libera a memória alocada pelos objetos
```

### Explicação:

- Dois objetos são criados e uma referência circular é estabelecida entre eles.
- As referências para esses objetos são removidas, tornando-os inacessíveis.
- O Garbage Collector detecta a referência circular e libera a memória alocada pelos objetos.

### Exemplo 3: Remoção de propriedades

```javascript
let obj = {
  dados: '...dados muito grandes...',
};

// Removendo a propriedade 'dados' do objeto
delete obj.dados;

// O objeto não é mais acessível
// O Garbage Collector detecta que o objeto não é mais acessível e libera a memória alocada por ele
```

### Explicação:

- Uma propriedade é removida de um objeto usando o operador `delete`.
- O objeto não é mais acessível.
- O Garbage Collector detecta que o objeto não é mais acessível e libera a memória alocada por ele.

O Garbage Collector em JavaScript é responsável por liberar a memória alocada por objetos que não são mais acessíveis, o que ajuda a evitar vazamentos de memória e torna a linguagem mais amigável para o desenvolvedor.