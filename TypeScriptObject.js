//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.//
var books = [
    { title: "1984", author: "George Orwell", year: 1949 },
];
console.log("List of Books:");
books.forEach(function (book) {
    console.log("Title: ".concat(book.title, ", Author: ").concat(book.author, ", Year: ").concat(book.year));
});
