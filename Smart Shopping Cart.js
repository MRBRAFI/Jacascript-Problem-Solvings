const cart = [
  { name: "Apple", price: 2.5, quantity: 3 },
  { name: "Banana", price: 1.2, quantity: 6 },
  { name: "Melon", price: 6.0, quantity: 5 },
  { name: "Banana", price: 1.5, quantity: 7 },
  { name: "Kiwi", price: 80.0, quantity: 2 },
  { name: "Papaya", price: 39.0, quantity: 21 },
];

const calculateTotal = (cart) => {
  let totalPrice = 0;
  for (const data of cart) {
    let indPrice = 0;
    if (data.quantity < 5) {
      indPrice += data.price * data.quantity;
      totalPrice += indPrice;
    } else if (data.quantity >= 5) {
      indPrice += data.price * data.quantity;
      const percentage = indPrice - (indPrice * 10) / 100;
      totalPrice += percentage;
    }
  }

  if (totalPrice > 100) {
    const discountedPrice = totalPrice - (totalPrice * 5) / 100;
    return Number(discountedPrice.toFixed(2));
  } else {
    return Number(totalPrice.toFixed(2));
  }
};

console.log(calculateTotal(cart));

// The question

// Problem: Smart Shopping Cart
// Write a function called calculateTotal that takes an array of items in a shopping cart and returns the total price after applying these rules:

// Each item has a price and a quantity
// Apply a 10% discount if buying 5 or more of the same item
// Apply an additional 5% discount on the final total if the cart total exceeds $100 (after individual item discounts)
// Round the final total to 2 decimal places

// Example input:
// javascriptconst cart = [
//   { name: "Apple", price: 2.50, quantity: 3 },
//   { name: "Banana", price: 1.20, quantity: 6 },
//   { name: "Orange", price: 3.00, quantity: 2 }
// ];
// Expected output:
// javascriptcalculateTotal(cart); // Should return a number
