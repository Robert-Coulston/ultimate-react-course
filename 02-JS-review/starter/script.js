const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

getYear = (str) => {
  var [year, month, day] = str.split("-");
  return year;
}

// const book = getBook(1);
// const {title, author, pages, publicationDate, genres, hasMovieAdaptation} = book;
// const updatedBook = { ...book, title: "blah", moviePublicationDate: '2001-12-19', year: getYear(publicationDate)}; 

// console.log(updatedBook);

// const summary = `${title} is a book written by ${author}`;
// const pagesRange = pages >= 1000 ? 'over 1000' : "under 1000";

// pagesRange

// var x = hasMovieAdaptation && "value is true";
// var y = !hasMovieAdaptation || "value is this";
// var z = !hasMovieAdaptation ?? "value is this";
// console.log(x,y,z);

// const a = [1,2,3,4,5].map(x => x * 2);
// a

const books = getBooks();
// const titles = books.map(b => b.title);

// const essentials = books.map(x => ({title: x.title, date: x.publicationDate}));
// essentials

// const longBooks = books.filter(x => x.pages > 834).map(x => x.pages);
// longBooks

const advBooks = books.filter(x => x.genres.includes("adventure")).map(x => x.title);
// advBooks

const total = books.reduce((a,c) => {return a + c.pages},0);
// total

const ss = [4,5,3,1,7,5,6];
//ss
const ss2 = ss.slice();
//ss2
const s = ss2.sort((a,b) => a-b);
//console.log(ss,ss2,s);

const sorted = books.sort((a,b) => {
  return (a.author).localeCompare(b.author);
});
//sorted

const newBook = {
  id: 6,
  title: "Harry Potter and the chamber of secrets",
  author: "J. K. Rowling"
}

const booksAfterAdd = [...books, newBook];
//booksAfterAdd

const booksAfterDelete = booksAfterAdd.filter(x => x.id !== 3);
//booksAfterDelete

// const result = fetch('https://jsonplaceholder.typicode.com/todos/1');
// result.then((x) => {return x.json()}).then(data => console.log(data));

async function getTodoList() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();
  console.log(data);
  return data;
}


await getTodoList();

console.log("finished");

