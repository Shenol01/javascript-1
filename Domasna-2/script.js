const LOCAL_SHIPPING = 120;
const INTERNATIONAL_SHIPPING = 450;
const HEAVY_ITEM_FEE = 300;

function calculateShipping(weight, isInternational) {
  let finalShippingPrice;

  if (weight <= 0) {
    finalShippingPrice = null;
  } else if (weight < 2) {
    finalShippingPrice = isInternational
      ? INTERNATIONAL_SHIPPING
      : LOCAL_SHIPPING;
  } else if (weight >= 2 && weight <= 10) {
    finalShippingPrice =
      (isInternational ? INTERNATIONAL_SHIPPING : LOCAL_SHIPPING) +
      HEAVY_ITEM_FEE;
  } else if (weight > 10 && weight <= 100) {
    finalShippingPrice =
      (isInternational ? INTERNATIONAL_SHIPPING : LOCAL_SHIPPING) +
      HEAVY_ITEM_FEE * 2;
  } else {
    finalShippingPrice = null;
  }

  return finalShippingPrice;
}

console.log("Shipping:", calculateShipping(3, true));

const LOW_TAX = 10;
const MID_TAX = 18;
const HIGH_TAX = 27;

function calculateTax(salary) {
  let taxAmount;

  if (salary <= 0) {
    taxAmount = null;
  } else if (salary < 20000) {
    taxAmount = (salary * LOW_TAX) / 100;
  } else if (salary >= 20000 && salary < 40000) {
    taxAmount = (salary * MID_TAX) / 100;
  } else if (salary >= 40000) {
    taxAmount = (salary * HIGH_TAX) / 100;
  } else {
    taxAmount = null;
  }

  return taxAmount;
}

console.log("Tax:", calculateTax(35000));

const WEEKDAY_PRICE = 250;
const WEEKEND_PRICE = 350;
const NIGHT_EXTRA = 80;

function determineTicketPrice(day, hour) {
  let ticketPrice;

  if (hour < 0 || hour > 23) {
    ticketPrice = null;
  } else if (day === "Saturday" || day === "Sunday") {
    ticketPrice = WEEKEND_PRICE;
  } else if (hour >= 22 || hour < 6) {
    ticketPrice = WEEKDAY_PRICE + NIGHT_EXTRA;
  } else {
    ticketPrice = WEEKDAY_PRICE;
  }

  return ticketPrice;
}

console.log("Ticket:", determineTicketPrice("Friday", 23));

const MIN_SALARY = 15000;
const MIN_AGE = 18;
const MAX_AGE = 67;

function evaluateLoanEligibility(age, salary, creditScore) {
  let status;

  if (age < MIN_AGE || age > MAX_AGE) {
    status = "Rejected: Age not eligible";
  } else if (salary < MIN_SALARY) {
    status = "Rejected: Salary too low";
  } else if (creditScore < 500) {
    status = "Rejected: Bad credit score";
  } else if (creditScore >= 500 && creditScore < 700) {
    status = "Approved with conditions";
  } else {
    status = "Approved";
  }

  return status;
}

console.log("Loan:", evaluateLoanEligibility(30, 28000, 650));

function calculateGrade(points) {
  let grade;

  if (points < 0 || points > 100) {
    grade = null;
  } else if (points < 50) {
    grade = "Недоволен (1)";
  } else if (points >= 50 && points < 65) {
    grade = "Доволен (2)";
  } else if (points >= 65 && points < 80) {
    grade = "Добар (3)";
  } else if (points >= 80 && points < 90) {
    grade = "Многу Добар (4)";
  } else if (points >= 90) {
    grade = "Одличен (5)";
  }

  return grade;
}

console.log("Grade:", calculateGrade(87));

let user = {
  name: "Shenol",
  age: 24,
  country: "Macedonia",
};

let product = {
  title: "Laptop",
  price: 45000,
  brand: "Lenovo",
};

let car = {
  model: "Golf 7",
  year: 2018,
  color: "White",
};

let book = {
  title: "Clean Code",
  author: "Robert C. Martin",
  pages: 464,
};

let student = {
  firstName: "Ana",
  lastName: "Petrovska",
  grade: 10,
};

console.log(user.name, user.age, user.country);
console.log(product.title, product.price);
console.log(car.model, car.year, car.color);
console.log(book.title, book.author);
console.log(student.firstName, student.grade);

const movie1 = {
  title: "Inception",
  director: "Christopher Nolan",
  release_year: 2010,
  genres: ["Sci-Fi", "Action", "Thriller"],
  duration: 148,
  rating: 8.8,
  print: function () {
    console.log(`Title: ${this.title}`);
    console.log(`Director: ${this.director}`);
    console.log(`Rating: ${this.rating}`);
  },
};

movie1.print();

const movie2 = {
  title: "The Matrix",
  director: "The Wachowskis",
  release_year: 1999,
  genres: ["Sci-Fi", "Action"],
  duration: 136,
  rating: 8.7,
  print: function () {
    console.log(`Title: ${this.title}`);
    console.log(`Director: ${this.director}`);
    console.log(`Genres: ${this.genres.join(", ")}`);
  },
};

movie2.print();

const movie3 = {
  title: "Interstellar",
  director: "Christopher Nolan",
  release_year: 2014,
  genres: ["Sci-Fi", "Drama"],
  duration: 169,
  rating: 8.6,
  print: function () {
    console.log(`Title: ${this.title}`);
    console.log(`Released: ${this.release_year}`);
    console.log(`Duration: ${this.duration} minutes`);
  },
};

movie3.print();
