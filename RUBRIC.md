# Project: Build a Shopping Cart

## Use the correct product property names and data types
Each product should have the following five properties. These naming conventions and data types mentioned below are also specified in the comments of the scripts.js file.

- `name` - name of product (string)
- `price` - price of product (number)
- `quantity` - quantity in cart should start at zero (number)
- `productId` - unique ID for the product (number)
- `image` - picture of product (URL string)

**Note:** Ensure to use the exact case and correct data type for each property mentioned in the bullet points above to avoid errors. For example, `productId` is correct, and `productid` (in lowercase) is incorrect.

If you do not adhere to the correct naming convention, or the data type of the properties, it may cause issues, such as:

- **Incorrect letter case for productId:** If the `productId` property does not adhere to the specified case sensitivity, the entire project fails to function.
- **Duplicate productId value:** If multiple products share the same `productId` value, none of the functionalities related to those specific products will operate.
- **Incorrect data type for productId:** If the `productId` property is set as a string rather than a number, the project becomes inoperative.
- **Incorrect data type for price and quantity:** If the `price` or `quantity` property is set as a string rather than a number, approximately 50% of the project becomes dysfunctional.


## Interface and Architecture
### Submission Requirements
- Understand, maintain, and access files within the project.
    - Folder structure is unchanged
    - All work on products, cart, and checkout are done in script.js.
    - If optional functionality is added, the bonus sections in front.js may be uncommented
- Navigate the UI to test functionality.
    - While viewing the live shop webpage, a user should be able to do the following:
        - Add item to the cart:
            - The first time an item is clicked, the item is added to the cart
            - After the first time an item is clicked, the quantity is increased.
        - Increase, decrease and remove an item from the cart :
            - Decreasing when quantity is at 1 will remove the item from the cart.
            - Remove will remove the item from the cart completely (even if quantity is greater than 1).

## Code Structure and Functionality
### Submission Requirements
- Create an array of product objects in JavaScript
    - A minimum of 3 products should be created.
    - Each product object should include a unique name, price, quantity, productId, and image.
    - All of the products should be in an array named products.
- Write JavaScript functions to implement cart functionality
    - Javascript functions are created to implement required functionality:
        - `addProductToCart(productId)`: gets the product using the productId and checks if the product is already in the array. If the product is in the cart, the product quantity is increased. If not, the product is added to cart.
        - `increaseQuantity(productId)`: gets product using the productId and increases product quantity.
        - `decreaseQuantity(productId)`: gets product using the productId and decreases product quantity.
        - `removeProductFromCart(productId)`: gets product using the productId and removes it entirely from the cart.
    - All functions should be created using function declaration.
- Write JavaScript functions to implement checkout functionality
    - Javascript functions are created to implement the required functionality:
        - `cartTotal()`: calculates and returns the total cost of all products in the cart. Use price and quantity to calculate the total cost.
        - `pay(amount)`: takes in an amount from the text field and checks if the amount is greater or less than the value returned from cartTotal(). In this function, the amount argument represents the money paid by the customer. Returns the positive or negative difference.
    - All functions should be created using function declaration.
    - A global variable is created to hold the value of the remaining balance.

## Code Quality
### Submission Requirements
- Use the correct product property names and data types
    - Each product should have the following five properties. These naming conventions and data types mentioned below are also specified in the comments of the scripts.js file.
        - `name` - name of product (string)
        - `price` - price of product (number)
        - `quantity` - quantity in cart should start at zero (number)
        - `productId` - unique ID for the product (number)
        - `image` - picture of product (URL string)
    - Note: Ensure to use the exact case and correct data type for each property mentioned in the bullet points above to avoid errors. For example, `productId` is correct, and `productid` (in lowercase) is incorrect.
- Follow JavaScript Best Practices
    - Code uses `let` and `const` instead of `var`.
    - Indenting is consistent -- either 1 tab, 2 spaces, or 4 spaces. No mixing tabs and spaces.
    - Function and variable names are meaningful.
    - All `console.log` statements used for debugging have been removed.
    - Helper functions are used instead of repeating code
    - Concise comments document the code

## Suggestions to Make Your Project Stand Out
- Remove all items from the cart.
- Integrate a currency switcher to switch between USD, EUR, and YEN.
- Implement currency formatting to accomodate USD, EUR, and YEN.
- Come back once you're familiar with the DOM API, HTML, and CSS and try the following:
    - Change/update the formatting of the store.
    - Add a mock credit card form with form validation.
    - Create a form for adding more products.
