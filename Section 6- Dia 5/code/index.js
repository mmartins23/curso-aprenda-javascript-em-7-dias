// 79. Inicando com as funções

// Function Declaration
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // Saída: 5

// Função nomeada (Function Expression)
let multiply = function add(a, b) {
    return a * b;
};

console.log(multiply(2, 3)); // Saída: 5


// 81. Utilizando os Argumentos em funções
function soma(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
  }
  
  console.log(soma(1, 2, 3)); // Saída: 6
  console.log(soma(10, 20, 30, 40)); // Saída: 100
  