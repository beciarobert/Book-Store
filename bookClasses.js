const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const booksContainer = document.querySelector('.book-container');
const indicator = document.querySelector('#indicator');

class Book {
  static collection = [];

  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static saveDataLocally = () => {
    const stringifiedLibrary = JSON.stringify(Book.collection);
    localStorage.setItem('library', stringifiedLibrary);
  }

  removeBook = () => {
    Book.collection = Book.collection.filter((book) => book.title !== this.title
    || book.author !== this.author);
    Book.saveDataLocally();
  };

  addBook = () => {
    Book.collection.push(this);
    Book.saveDataLocally();
    this.displayBook();
  }

}

function checkRepetition(book) {
  for (let i = 0; i < Book.collection.length; i += 1) {
    const currentBook = Book.collection[i];
    if (currentBook.title.toLowerCase() === book.title.toLowerCase()
    && currentBook.author.toLowerCase() === book.author.toLowerCase()) {
      indicator.textContent = 'Book already added';
      return false;
    }
  }
  return true;
}

