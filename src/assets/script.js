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

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

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

const cartTotal = () => {
  let total = 0;
  cart.forEach((product) => {
    total += product.price * product.quantity;
  });
  return total;
};

/* Create a function called emptyCart that empties the products from the cart */

const emptyCart = () => {
  cart.forEach((product) => {
    product.quantity = 0;
  });
  cart.length = 0;
};

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart
*/

const pay = (amount) => {
  // Check if the cart is empty
  if (cart.length === 0) {
    // If the cart is empty, return the received amount because there's no cash to be returned
    return amount;
  } else {
    // If the cart is not empty, subtract the cart total from the received amount
    return amount - cartTotal();
  }
};

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

// Features added:

// - Updated CSS on the store checkout, cart, and products, including responsiveness for cart

// - Added function to clear Cart Total after payment
document.querySelector(".pay").addEventListener("click", (e) => {
  document.querySelector(".cart-total").innerHTML = "";
});

/* Begin remove all items from cart */
function dropCart() {
  let shoppingCart = document.querySelector(".empty-btn");
  let div = document.createElement("button");
  div.classList.add("empty");
  div.innerHTML = `Empty Cart`;
  shoppingCart.append(div);
}
dropCart();

document.querySelector(".empty-btn").addEventListener("click", (e) => {
  if (e.target.classList.contains("empty")) {
    emptyCart();
    drawCart();
    drawCheckout();
    cartTotal();
  }
});

/* End all items from cart */

// Clear the summary, checkout, and cart when cash received is clicked
function resetCheckout() {
  clearPaySummary();
  drawCart();
  drawCheckout();
  cartTotal();
}


// eventlistener when clicking .pay
document.querySelector(".pay").addEventListener("click", (e) => {
  e.preventDefault();

  let amount = parseFloat(document.querySelector(".received").value);
  let cashReturn = pay(amount);

  let paymentSummary = document.querySelector(".pay-summary");
  let div = document.createElement("div");

  if (cashReturn >= 0) {
    div.innerHTML = `
            <p>Cash Received: $${amount}</p>
            <p>Cash Returned: $${cashReturn}</p>
            <p>Thank you!</p>
        `;
    // emptyCart();
  } else {
    div.innerHTML = `
            <p>Cash Received: $${amount}</p>
            <p>Remaining Balance: $${Math.abs(cashReturn)}</p>
            <p>Please pay additional amount.</p>
        `;
  }

  paymentSummary.append(div);
  // resetCheckout();
});
// clear checkout after add-to-cart button is clicked
document.querySelector(".products-container").addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    drawCheckout();
    resetCheckout();
    cartTotal();
    drawCart();
  }
});

// Function to clear the pay-summary
function clearPaySummary() {
  document.querySelector(".pay-summary").innerHTML = "";
}

// clear input field after pay button is clicked
document.querySelector(".pay").addEventListener("click", (e) => {
  document.querySelector(".received").value = "";
});

//  Add Empty Button to the cart
// Select the h2 within the products-container
let h2 = document.querySelector(".products-container h2");

// Create a new div with the class empty-btn
let div = '<div class="empty-btn"></div>';

// Insert the new div after the h2 (end of the h2 element)
h2.insertAdjacentHTML("afterend", div);

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