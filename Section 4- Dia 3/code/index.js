// 48. Criando um Objeto

const book = {
    bookTitle: 'Atomic Habits',
    bookAuthor: 'James Clear',
    bookPages: 306,
    bookChapters: {
        chap1: 'Fundamentals',
        chap2: '1st Law'
    },

    printBook: () => {
        console.log('Printing ...')
    }
}

console.log(book);
// 49. Funções dentro de um Objeto
book.printBook();