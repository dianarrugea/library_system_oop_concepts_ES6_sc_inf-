class Book {
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
  }
  displayInfo() {
    console.log(
      `The book name is ${this.title}, the author name is ${this.author} and the ISBN is ${this.ISBN}`
    );
  }
}

class FictionBook extends Book {
  constructor(title, author, ISBN, genre) {
    super(title, author, ISBN);
    this.genre = genre;
  }
  displayInfo() {
    console.log(
      `The book name is ${this.title}, the author name is ${this.author}, the ISBN is ${this.ISBN} and the genre is ${this.genre}`
    );
  }
}

class Library {
  constructor(books) {
    this.books = books;
  }
  addBook(newBook) {
    this.books.push(newBook);
    console.log(
      `You added the following book to the Library: ${newBook.title}`
    );
    console.log(myLibrary);
  }
  displayBooks() {
    this.books.forEach(function (books) {
      console.log(`The library has ${books.title}`);
    });
  }
}

class Member {
  constructor(name) {
    this.name = name;
    this.bookList = [];
  }
  borrowingBooks(borrowedBook) {
    console.log(
      `${this.name} is borrowing the following book: ${borrowedBook.title}`
    );
    this.bookList.push(borrowedBook);
  }
  displayMemberBooks() {
    console.log(`${this.name} has borrowed the following books: `);
    this.bookList.forEach(function (book) {
      console.log(`${book.title}`);
    });
    console.log(this);
  }
}

const book1 = new Book(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  "9780192832696"
);
const book2 = new FictionBook(
  "Gone with the Wind",
  "Margaret Mitchel",
  "9781783226450",
  "drama"
);
const book3 = new Book("Pride and Prejudice", "Jane Austen", " 9781428108325");
const myBooksArray = [book1, book2];
const myLibrary = new Library(myBooksArray);

// Keeping track of added books
myLibrary.displayBooks();
myLibrary.addBook(book3);
myLibrary.displayBooks();

// Display the info about both types of the books
book1.displayInfo();
book2.displayInfo();
book3.displayInfo();

let firstMember = new Member("Alina");

// Creating a new book and adding it to the library
const book4 = new FictionBook(
  "Harry Potter",
  "J.K. Rowling",
  "9780590353427",
  "drama"
);
myLibrary.addBook(book4);

// Adding books to the first memeber's list & displaying the list of this user's borrowed books
firstMember.borrowingBooks(book1);
firstMember.borrowingBooks(book4);

firstMember.displayMemberBooks();

// Creating a second and a third member and add books to it's list of borrowed books and then display them
let secondMember = new Member("Marcel");

secondMember.borrowingBooks(book2);
secondMember.borrowingBooks(book3);

secondMember.displayMemberBooks();

let thirdMember = new Member("Ilinca");

thirdMember.borrowingBooks(book1);
thirdMember.borrowingBooks(book3);

thirdMember.displayMemberBooks();
