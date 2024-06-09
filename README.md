# Introduction
This project aims to challenge you to think like a programmer to create functionality for a real-world scenario. The project iterates on the skills you gained in the previous lesson while also requiring you to build on those skills by using documentation. This project barely touches the surface of what is possible, but it uses many of the foundational skills that will make up most of your future coding projects.

## Refactoring and Testing Are Important!
Refactor and test as much as possible for this project while you build this project. As you build each piece of functionality, spend time testing and refactoring your code. If it takes you 3 hours to figure out the logic, it will likely take another 3 hours to test and fix your code to ensure that you write the best code possible.

As your skills improve, this process will feel more natural.

**Hint:** Make sure to remove any debugging code from your final submission.

## What Will I Be Building?
You will be creating the core functionality used for a storefront application. The visual of the storefront and the JavaScript necessary to connect the code you will write to that visual has already been created.

Shopping carts are a fantastic tool for practicing JavaScript fundamentals.

## Breaking it Down
If you picture an online store, there are typically three parts, the product listing, the cart, and the checkout. You will be responsible for getting all 3 of these pieces working.

### Products
First, think of the product list. You have learned about object literals. Objects are a perfect way to store product data, and you can use an array to collect those objects. Each product must be able to be added to the cart.

### Cart
Next, we have the shopping cart. Carts usually have quite a bit of functionality. Once the cart is populated with products, you need to be able to increase or decrease the quantity or fully remove an item. The cart often displays the individual product totals and updates as the quantity changes.

### Checkout
Finally, there’s the checkout. For this project, assume it’s a cash-only storefront at a street market. The checkout should show the final amount due for all products in the cart. For any amount of cash received, the receipt should show what is still owed by the customer or how much should be returned to the customer if they gave more than the total due.

When we build professional shopping carts, we almost always want to have that data stored somewhere so that we can access it later for things like accounting, inventory, and returns. You won’t have to worry about a backend at this point, but the work you do with your product objects will set you up well for future projects where you do have a backend you need to access.

## The Results!!!
After completing the functionality for your shopping cart, the resulting storefront will look like this:

![image](https://github.com/IntermediaDesigns/shopping-cart/assets/139661024/19ecddb6-57f4-4112-b8c8-57acec6c3875)

a complete store front with 3 products added to the cart
Completed Storefront

## What Will I Learn?
The shopping cart presents the first opportunity to fully combine your new JavaScript foundational skills into a larger project. Aside from solidifying your skills, you’ll spend a lot of time debugging, working through logic scenarios, and refactoring to simplify your code.

The following are just some of the questions that you’ll experience along the way:

- What’s the ideal workflow?
- How many JavaScript functions do I need?
- Do I need additional control flow logic to handle multiple scenarios?
- Should my function be this many lines of code?
- Will creating more functions help with readability and reduce the amount of code?

There’s no single correct answer to each question. While building this project, working with peers, and getting feedback from the project reviewer -- you will naturally develop your own answers to these questions!

## Before Moving Forward...
Make sure you are comfortable with the content from Intro to JavaScript. Ask yourself:

- When should let be used instead of const?
- How do you write a function?
- What are parameters vs. arguments?
- Should a return statement always be included?
- How do we call a function?
- Can a function be invoked inside of another function?
- What is control flow, and how can we use it to work with multiple scenarios?
- How can you iterate through an array?
- What is an array, and which methods can we use to work with arrays?
- What is an object literal?
- How do we use dot notation to traverse an object to modify its properties?
