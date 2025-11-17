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

console.log(filterByRating(books));
