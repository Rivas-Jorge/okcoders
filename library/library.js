


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const library = [];

function createBook(title, author, genre, yearPublished) {
  // Your code here
    return {
        title: title,
        author: author,
        genre: genre,
        yearPublished: yearPublished
    }
}

function addBook(book) {
  // Your code here
 library.push(book); 
}

function removeBook(title) {
  // Your code here
  const index = library.findIndex((book) => book.title === title);
  if (index !== -1) {
      library.splice(index, 1);
      console.log(`Book "${title}" has been removed from the library.`);
  } else {
    console.log(`Book "${title} is not found in the library.`);
  }
}

// ...

// function findBook(title) {
//   const index = library.findIndex((book) => book.title === title);
//   if (index !== -1) {
//     const searchResultsDiv = document.getElementById("searchResults");
//     searchResultsDiv.innerHTML = `Book "${title}" has been found in the library.`;
//   } else {
//     const searchResultsDiv = document.getElementById("searchResults");
//     searchResultsDiv.innerHTML = `Book "${title}" is not found in the library.`;
//   }
// }

// code above is for testing on my personal library 



function findBook(title) {
  // Your code here
  const index = library.findIndex((book) => book.title === title);
  if (index !== -1) {
      console.log(`Book "${title}" has been found in the library.`);
      //return book;
  } else {
    console.log(`Book "${title} is not found in the library.`);
  }
}

function listBooks() {
  // Your code here
  if (library.length === 0) {
    console.log("The library is empty.");
  } else {
      console.log("Books in the library. Here's a list of them: ");
      for (let i = 0; i < library.length; i++) {
        console.log(library[i]);
      }
  }
}

// function listBooks() {
//   if (library.length === 0) {
//     console.log("The library is empty.");
//   } else {
//     console.log("Books in the library:");
//     library.forEach((book) => {
//       console.log(`${book.title} by ${book.author}`);
//     });
//   }


function prompt() {
  rl.question("What would you like to do?\n\n1. Create a book\n2. Add a book\n3. Remove a book\n4. Find a book\n5. List all books\n6. Exit the program\n\n", (answer) => {

    console.log(answer);
    // your code here
    switch (answer) {
        case "1":
            rl.question("What is the title of the book?\n", (title) => {
                rl.question("Who is the author of the book?\n", (author) => {
                    rl.question("What is the genre of the book?\n", (genre) => {
                        rl.question("What is the year the book was published?\n", (yearPublished) => {
                            const book = createBook(title, author, genre, yearPublished);
                            console.log(`Book "${title}" has been created.`);
                            addBook(book);
                            prompt();
                        });
                    });
                });
            });
            break;
        case "2":
            rl.question("What is the title of the book?\n", (title) => {
                const book = findBook(title);
                if (book) {
                    addBook(book);
                }
                prompt();
            });
            break;
        case "3":
            rl.question("What is the title of the book?\n", (title) => {
                removeBook(title);
                prompt();
            });
            break;
        case "4":
            rl.question("What is the title of the book?\n", (title) => {
                findBook(title);
                prompt();
            });
            break;
        case "5":
            listBooks();
            prompt();
            break;
        case "6":
            console.log("Goodbye!");
            break;
        default:
            console.log("Invalid input. Please try again.");
    }
    if (answer !== "6") {
        prompt();
    } else {
        rl.close();
    }
  });
}

prompt();