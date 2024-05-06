// // 48. Criando um Objeto

// const book = {
//     bookTitle: 'Atomic Habits',
//     bookAuthor: 'James Clear',
//     bookPages: 306,
//     bookChapters: {
//         chap1: 'Fundamentals',
//         chap2: '1st Law'
//     },

//     printBook: () => {
//         console.log('Printing ...')
//     }
// }

// console.log(book);
// // 49. Funções dentro de um Objeto
// book.printBook();



// 50. Criando uma factory

// function createBook(title, author, pages) {
//     const book = {
//         bookTitle: title,
//         bookAuthor: author,
//         bookPages: pages,
//         printBook: () => {
//             console.log('Printing ...')
//         }
//     }
//     return book;
// }

// const book1 = createBook('Atomic Habits', 'James Clear', 306);
// const book2 = createBook('Think', 'Napolean', 453);

// // 52. Adicionando propriedades
// book1.color = 'White';

// console.log(book1, book2);

// 53. Criando um Constructor
function CreateBook(title, author, pages) {
        this.bookTitle = title;
        this.bookAuthor = author;
        this.bookPages = pages
}

const book1 = new CreateBook('Atomic Habits', 'James Clear', 306);
const book2 = new CreateBook('Think', 'Napolean', 453);
console.log(book1, book2);