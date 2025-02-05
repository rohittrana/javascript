const books = [
               { name: "Atomic Habits", author: "James Clear", year: 2018 },
               { name: "The Pragmatic Programmer", author: "Andrew Hunt & David Thomas", year: 1999 },
               { name: "Clean Code", author: "Robert C. Martin", year: 2008 },
               { name: "You Don't Know JS", author: "Kyle Simpson", year: 2015 },
               { name: "JavaScript: The Good Parts", author: "Douglas Crockford", year: 2008 },
               { name: "The Lean Startup", author: "Eric Ries", year: 2011 },
               { name: "Deep Work", author: "Cal Newport", year: 2016 },
               { name: "The Alchemist", author: "Paulo Coelho", year: 1988 },
               { name: "Rich Dad Poor Dad", author: "Robert Kiyosaki", year: 1997 },
               { name: "The Psychology of Money", author: "Morgan Housel", year: 2020 },
               { name: "Zero to One", author: "Peter Thiel", year: 2014 },
               { name: "Sapiens", author: "Yuval Noah Harari", year: 2011 },
               { name: "The 4-Hour Workweek", author: "Tim Ferriss", year: 2007 },
               { name: "Hooked", author: "Nir Eyal", year: 2014 },
               { name: "Cracking the Coding Interview", author: "Gayle Laakmann McDowell", year: 2015 },
               { name: "Eloquent JavaScript", author: "Marijn Haverbeke", year: 2018 },
               { name: "Design Patterns", author: "Erich Gamma et al.", year: 1994 },
               { name: "The Art of Computer Programming", author: "Donald Knuth", year: 1968 },
               { name: "Refactoring", author: "Martin Fowler", year: 1999 },
               { name: "Think and Grow Rich", author: "Napoleon Hill", year: 1937 }
             ];
             
         const userBooks = books.filter((bk)=>bk.year>1940);

         
         console.log(userBooks);
             