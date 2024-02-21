//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.//



interface Book {
    title: string;
    author: string;
    year: number;
  }
  
  const books: Book[] = [
    { title: "1984", author: "George Orwell", year: 1949 },
   
  ];
  
  console.log("List of Books:");
  books.forEach(book => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`);
  });
  