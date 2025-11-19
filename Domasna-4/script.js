const employees = [
  { name: "Marko", department: "IT" },
  { name: "Ana", department: "HR" },
  { name: "Stefan", department: "Finance" },
  { name: "Elena", department: "Marketing" },
];

employees.forEach((employee) => {
  console.log(`${employee.name} works in the ${employee.department} department.`);
});

const students = ["martin", "kristina", "petar", "bojana"];

const usernames = students.map((student) => {
  return student.toUpperCase() + "_2025";
});

console.log(usernames);

const orders = [
  { id: 1, total: 850 },
  { id: 2, total: 2400 },
  { id: 3, total: 1500 },
  { id: 4, total: 3200 },
  { id: 5, total: 600 },
];

const expensiveOrders = orders.filter((order) => order.total > 2000);

console.log(expensiveOrders);

const smartphones = [
  { brand: "Samsung", model: "S21", price: 28000, inStock: true },
  { brand: "Apple", model: "iPhone 12", price: 42000, inStock: false },
  { brand: "Xiaomi", model: "Mi 11", price: 18000, inStock: true },
  { brand: "Apple", model: "iPhone 14", price: 62000, inStock: true },
];


const applePhones = smartphones
  .filter((phone) => phone.brand === "Apple")
  .map((phone) => {
    return {
      fullName: `${phone.brand} ${phone.model}`,
      cena: phone.price + " den.",
      status: phone.inStock ? "Available" : "Not Available",
    };
  });

console.log(applePhones);













