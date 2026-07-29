/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

interface bookCatalog {
    numberISBN: string;
    bookTittle: string;
    authorName: string;
    page: number;
    status: "Borrowed" | "Available"

}

const books: bookCatalog[] = [
    { 
        numberISBN: "SI001", 
        bookTittle: "Anatomic Habits", 
        authorName: "James Clear", 
        page: 320, status: "Borrowed" 
    },
    { 
        numberISBN: "F010", 
        bookTittle: "Laskar Pelangi", 
        authorName: "Andrea Hirata", 
        page: 529, status: "Available" 
    },
    { numberISBN: "S101", 
        bookTittle: "Sejarah Singkat Manusia", 
        authorName: "Yufal Noah Harari", 
        page: 443, status: "Available" 
    }
]

console.log("=== Book Information ===");
console.log(books);