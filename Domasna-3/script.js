class City {
  constructor(name, country, population) {
    this.name = name;
    this.country = country;
    this.population = population;
  }

  print() {
    console.log(
      `${this.name}, ${this.country} - Population: ${this.population}`
    );
  }
}

const cityData = [
  ["Skopje", "Macedonia", 550000],
  ["Bitola", "Macedonia", 74000],
  ["Ohrid", "Macedonia", 42000],
  ["Tetovo", "Macedonia", 55000],
  ["Kumanovo", "Macedonia", 105000],
  ["London", "UK", 9000000],
  ["Paris", "France", 2100000],
  ["Berlin", "Germany", 3600000],
  ["Madrid", "Spain", 3300000],
  ["Rome", "Italy", 2800000],
];

const cities = cityData.map((item) => new City(...item));

console.log("All cities:");
cities.forEach((city) => city.print());

const mostPopulated = cities.reduce(
  (max, city) => (city.population > max.population ? city : max),
  cities[0]
);
console.log("\nMost populated city:");
mostPopulated.print();

const top3 = [...cities]
  .sort((a, b) => b.population - a.population)
  .slice(0, 3);
console.log("\nTop 3 most populated cities:");
top3.forEach((city) => city.print());

function calculateAverage(array, property) {
  return array.reduce((sum, item) => sum + item[property], 0) / array.length;
}

const avgPopulation = calculateAverage(cities, "population");
console.log(`\nAverage population: ${avgPopulation.toFixed(0)}`);

console.log("\n-----------------------\n");

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  display() {
    console.log(`"${this.title}" by ${this.author} - Pages: ${this.pages}`);
  }
}

const bookData = [
  ["The Hobbit", "J.R.R. Tolkien", 310],
  ["1984", "George Orwell", 328],
  ["Pride and Prejudice", "Jane Austen", 279],
  ["To Kill a Mockingbird", "Harper Lee", 281],
  ["Moby Dick", "Herman Melville", 635],
  ["War and Peace", "Leo Tolstoy", 1225],
  ["The Great Gatsby", "F. Scott Fitzgerald", 180],
  ["The Catcher in the Rye", "J.D. Salinger", 214],
  ["Crime and Punishment", "Fyodor Dostoevsky", 671],
  ["Brave New World", "Aldous Huxley", 268],
];

const books = bookData.map((data) => new Book(...data));

console.log("All books in the library:");
books.forEach((book) => book.display());

const largestBook = books.reduce(
  (max, book) => (book.pages > max.pages ? book : max),
  books[0]
);
console.log("\nBook with the most pages:");
largestBook.display();

const top3Books = [...books].sort((a, b) => b.pages - a.pages).slice(0, 3);
console.log("\nTop 3 longest books:");
top3Books.forEach((book) => book.display());

function calculateAveragePages(array) {
  const total = array.reduce((sum, book) => sum + book.pages, 0);
  return total / array.length;
}

const averagePages = calculateAveragePages(books);
console.log(`\nAverage number of pages: ${averagePages.toFixed(0)}`);
