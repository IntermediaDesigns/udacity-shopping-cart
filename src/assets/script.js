/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

const products = [];

/* Create 3 or more product objects using object literal notation
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

const cherry = {
  name: "Carton of Cherries",
  price: 4.0,
  quantity: 0,
  productId: 1,
  image: "/images/cherry.jpg",
};

const strawberry = {
  name: "Carton of Strawberries",
  price: 5.0,
  quantity: 0,
  productId: 2,
  image: "/images/strawberry.jpg",
};

const orange = {
  name: "Carton of Oranges",
  price: 10.0,
  quantity: 0,
  productId: 3,
  image: "/images/orange.jpg",
};

products.push(cherry, strawberry, orange);

/* Declare an empty array named cart to hold the items in the cart */

const cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

const addProductToCart = (productId) => {
  const product = products.find((product) => product.productId === productId);
  if (product) {
    product.quantity++;
    if (!cart.includes(product)) {
      cart.push(product);
    }
  }
};

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

const increaseQuantity = (productId) => {
  const product = products.find((product) => product.productId === productId);
  if (product) {
    product.quantity++;
  }
};

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

const decreaseQuantity = (productId) => {
  const product = products.find((product) => product.productId === productId);
  if (product) {
    product.quantity--;
    if (product.quantity === 0) {
      removeProductFromCart(productId);
    }
  }
};

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

const removeProductFromCart = (productId) => {
  const product = products.find((product) => product.productId === productId);
  if (product) {
    product.quantity = 0;
    const index = cart.indexOf(product);
    cart.splice(index, 1);
  }
};

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/
// Clear total amount after payment
const cartTotal = () => {
  let total = 0;
  cart.forEach((product) => {
    total += product.price * product.quantity;
  });
  return total;
};

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/

const pay = (amount) => {
  return amount - cartTotal();
};

// Clear total amount after payment

/* Create a function called emptyCart that empties the products from the cart */

const emptyCart = () => {
  cart.forEach((product) => {
    product.quantity = 0;
  });
  cart.length = 0;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
};

// ## [Optional] Add Extra Features

// - Remove all items from the cart using an emptyCart function.

// - Integrate a currency switcher to switch between USD, EUR, and YEN.
// - Implement currency formatting to accomodate USD, EUR, and YEN.

// Come back once you're familiar with the DOM API, HTML, and CSS and try the following:

// - Change/update the formatting of the store.
// - Add a mock credit card form with form validation.
// - Create a form for adding more products.
