# Instructions
Before you start coding for the project, we strongly recommend you look at this rubric(opens in a new tab), against which the Mentor will review your submission. Your submission must satisfy all rubric criteria to pass the project; otherwise, the Mentor may ask you to re-submit.

## Instructions
For this project, you will be writing all of your code in the script.js file located in the src/assets folder.

## Start With a Plan
It's very important to plan your project before you start writing any code! Break your project down into small pieces of work and strategize your approach to each one. Writing bite-sized chunks of code will make it easier to debug and fix issues as they appear.

Feel free to implement your own design workflow by following the comments, but if you get stuck -- here is a suggested plan to get you up and running!

## Suggested Plan
1. Review the starter code, especially script.js where you will be doing all of your work.
2. Build the products. Test and confirm all aspects of the user interface are working. Fix the code as needed.
3. Create the cart functionality. Test and confirm all aspects of the user interface are working. Fix the code as needed.
4. Create the checkout functionality. Test and confirm all aspects of the user interface are working. Fix the code as needed.
5. Refactor your code to improve its appearance and functionality
6. Test before submission. You should be testing as you build, but it's always good to do one more set of tests before you submit the project. You'll also want to review the Project Rubric(opens in a new tab) to ensure that you have met all of the requirements.

## Detailed Instructions
### Step 1: Review the Starter Code
Start with the front-end
Starter code

The only files you need to view are found in the src folder.

![image](https://github.com/IntermediaDesigns/shopping-cart/assets/139661024/d0012551-e0c6-47cb-95e5-f5c5c1e6959a)

You won’t need to modify the HTML in index.html for this project to work. Nor will you need to adjust the front.js file. front.js includes code that uses something called the DOM API. This is what connects your code to the HTML. You don’t need to worry about it right now. Should you continue with front-end development, you’ll learn all about what this file is doing.

Use the document comments as a guide
Read through all of the instructive comments in script.js. All of your functionality will be in script.js. The comments include the required names and parameters for the functions. The structure of the document is based on procedural programming. This means that the code is structured in the way that the application is used.

The first thing your store needs is products, so that you will create products first. The last thing you do is check out, so the pay function is the last function you will create.

Hint: Try adding additional comments using single-line comments with any ideas or pseudocode that comes to mind while reading the comments.

Things to think about...
Are there any functions listed that surprise you?
Any parts to the functions that seem repetitive?

### Step 2: Build the Products
This project requires three products. Each product should have five properties:

- name: name of product (string)
- price: price of product (number)
- quantity: quantity in cart should start at zero (number)
- productId: unique id for the product (number)
- image: picture of product (url string)

Once you have created the products, you’ll need to place them into the products array.

How will I know that I have done this correctly?
Once the products are in products, you will see them displayed in the storefront.

Thinks to think about...
Does each product have a unique number identifier? (Example: 100, 101, 102.)
How do you access the images in the /images folder?
How do you put the products into products array?

### Step 3: Create the Cart Functionality
Once your products are displaying on the front-end, you will see that there is already an "Add to Cart" button there -- but if you click on it, nothing will happen.

To get the cart working you'll need to create four functions:

- addProductToCart()
- increaseQuantity()
- decreaseQuantity()
- removeProductFromCart()

All four functions must accept the SKU as an argument because you'll need to use the SKU to figure out which product needs to be added/adjusted in the cart.

#### addProductToCart()
This function should be done first.

Adding the product to the cart should increase the products cart quantity to 1 and add the product to cart. The cart visual is populated by the objects contained in cart.
If the product is already in the cart, clicking "add to cart" should only increase the cart quantity.
If you have done it correctly, clicking the button will render the item into the cart with a new set of buttons including, "+", "-", and "remove."

#### increaseQuantity()
The increaseQuantity() function is tied to the "+" button; clicking it should increase the quantity displayed in the cart.
This button only needs to increase the cart quantity. Assume there is an unlimited amount of stock.

#### decreaseQuantity()
The decreaseQuantity() function is tied to the "-" button; clicking it should decrease the quantity displayed in the cart.
Rather than display "quantity: 0" in the cart, the item should just be removed entirely from the cart when the quantity will be 0.
Since adding an item to the cart adds the item to the cart, reaching quantity 0 should remove the item from the array.

#### removeProductFromCart()
The removeProductFromCart() function is directly tied to the "remove" button; clicking it should remove the single product from the cart regardless of the quantity in the cart and set the quantity back to 0.

Things to think about...
Getting the product from the SKU will be the most challenging part. What JS technique did you learn that will allow you to compare the SKU being passed in to all the product SKUs?
How can you check to see if the product is already in the cart to avoid having the same product listed in the cart twice? Click here if you need a hint(opens in a new tab).

### Step 4: Create the Checkout Functionality
The Checkout area contains the cart total, a form field to enter the amount paid, and a receipt area that will display information about the payment. None of this functionality will work without creating a global totalPaid variable and completing the required functions:

- cartTotal()
- pay()

The totalPaid variable contains the total amount the user has entered into the cash received field. If multiple attempts to add cash are made, the totalPaid variable will hold the sum of those attempts.

These function will allow the user to see the cost of the items in the cart and make a purchase.

#### cartTotal()
cartTotal() requires no parameters.
Invoking the function should calculate and then return the grand total of the cart.
Hint: One way to solve this is to get each product total and add them together. (quantity price) + (quantity price) + … = grand total

#### pay()
pay() accepts the amount entered in the “Cash Received” field as an argument.
You'll need to access the global totalPaid variable for this function to work.
Don't worry about valiadating the input. You can assume that only numbers will be entered.
pay() should return either a positive or negative number.

Examples

If an amount greater than the grand total is entered, pay() will return a positive number. The amount should be how much the customer will receive back. (Example: Grand Total = $5. Cash Received = $20. pay() returns 15 which is the amount that should be returned back to the customer.)
If an amount less than the grand total is entered, pay() will return a negative number. This is the remaining amount due. (Example: Grand Total = $25. Cash Received = $20. pay() returns -5 which is the remaining balance.)
If a subsequent amount is entered into the field to resolve a remaining balance. That amount is added to the previous amount paid to display either the amount that should be returned to the customer or a continued remaining balance.

## Step 5: REFACTOR!
At this point, your code should be working properly. Ideally, refactoring happens while you are developing, but as a new developer, you often don’t have the whole picture in your head to be able to do so properly. Let’s clean the project up.

- Have you run your code through a linter? Linters are popular tools that scan your code and compare it to popular standards and patterns. There are online linters(opens in a new tab), linters that you can install into your IDE/text editor, and linters that you can install at an application level. Different companies use different standards, but regardless of the standard, running your code through a linter may bring to light issues you didn't otherwise see. We request you still follow Udacity standards(opens in a new tab) when the code is complete, but running it through a linter(opens in a new tab) is going to help you get started in refactoring.
- Are you using ES6 const and let?
- Is your code DRY? DRY stands for "Don't Repeat Yourself." When we code, we want our code to be simple to read and easy to maintain. When you find yourself repeating the same bit of code over and over again, you're repeating yourself. We can turn these repeated bits of code into helper functions that are written once and called as needed. Are there any pieces that would be better served as a helper function to avoid duplication?
- How is your code structured? Have you created functions for the main functionality with properly scoped variables? Starting out it’s likely that you will have globally scoped variables on occasion (in fact, this project requires at least 1 that contains a primitive value) until you learn more about closures, scope, and design patterns. But placing your variables into functions is a great way to make your code more readable and a way to avoid globally scoped variables.
- Are you using the best order for control flow conditionals? Are they easy to read? What about any operators you are using?

## Step 6: Re-test the User Interface
Once your code is complete, you should make one final check to confirm that you have a working store.

- Is the product list displaying all three projects with their name, price, and image? Does the “add to cart” button work?
- Once an item is in the cart, are you able to increase and decrease the quantity? Are you able to remove the item? Does the total for quantity * price display for each individual item?
- For the checkout, is a total cart price available? When entering an amount less than the total, is the customer prompted to pay more? When entering an amount greater than the total cart price, is the amount the customer should receive back displayed along with a “Thank you” message?

You'll also want to review the Project Rubric(opens in a new tab) to ensure that you have met all of the requirements.

## [Optional] Add Extra Features
This project can be greatly expanded. Think about the things you could add or modify to improve the project. Many of these would like include an understanding of working with the DOM API. Once you learn the DOM API, this is a great project to expand on.

In the mean time, some opportunities have been included for you. To access the items, view front.js. You'll see commented out sections at the bottom of the file. Uncomment the section to create the link between the frontend and the JS you will continue to write in script.js. It will likely be best to add your functionality at the end of your script.js file. Make sure to use comments to declare what your functions do.

Follow the comments for basic instructions on adding the functionality.

Options include:

- Remove all items from the cart using an emptyCart function.
- Integrate a currency switcher to switch between USD, EUR, and YEN.
- Implement currency formatting to accomodate USD, EUR, and YEN.

Come back once you're familiar with the DOM API, HTML, and CSS and try the following:

- Change/update the formatting of the store.
- Add a mock credit card form with form validation.
- Create a form for adding more products.

