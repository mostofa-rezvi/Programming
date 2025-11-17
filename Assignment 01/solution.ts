function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
}

function getLength(value: string | any[]): String {
  if (typeof value === "string") {
    return value.length + ";";
  } else if (Array.isArray(value)) {
    return value.length + ";";
  } else {
    return "0;";
  }
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}';`;
  }
}

interface Item {
  title: string;
  rating: number;
}

function filterByRating(items: Item[]): Item[] {
  const filterArray: Item[] = items.filter((itemm: Item) => {
    return itemm.rating >= 4;
  });
  return filterArray;
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function filterActiveUsers(user: User[]): User[] {
  const activeUser: User[] = user.filter((users: User) => {
    return users.isActive;
  });
  return activeUser;
}

const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? "Yes" : "No";

  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
  );
}

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);

type ArrayItem = string | number;

function getUniqueValues(arr1: ArrayItem[], arr2: ArrayItem[]): ArrayItem[] {
  const newArray: ArrayItem[] = [];

  function checkValue(value: ArrayItem, array: ArrayItem[]): boolean {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    const valueOne = arr1[i]!;
    if (!checkValue(valueOne, newArray)) {
      newArray.push(valueOne);
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    const valueTwo = arr2[j]!;
    if (!checkValue(valueTwo, newArray)) {
      newArray.push(valueTwo);
    }
  }

  return newArray;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(product: Product[]): number {
  if (product.length === 0) {
    return 0;
  }

  const total = product.reduce((sum, item) => {
    let basePrice = item.price * item.quantity;
    let finalPrice = basePrice;

    if (item.discount !== undefined) {
      let d = item.discount / 100;
      finalPrice = basePrice * (1 - d);
    }

    return sum + finalPrice;
  }, 0);

  return total;
}

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];
