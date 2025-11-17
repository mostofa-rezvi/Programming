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

console.log(calculateTotalPrice(products));
