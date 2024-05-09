Homble Frontend Assessment
This repository is for the assessment of the frontend engineer position at Homble (www.homble.in).

We are looking for front-end developers experienced in React to join our team. Ideal candidates should have a solid understanding of React principles and be comfortable with components, state management, interacting with APIs, and lifecycle methods.

Interested candidates are expected to copy everything in this repo to their own new private repo, build out the challenges listed below, and share their new repo back with us. If you are familiar with JS and React, this entire assessment could take you about 4-6 hours depending on your current proficiency level.

Background Information and Preparation:
Our frontend is built with React and Bootstrap, and hence we expect you to use these libraries itself. You can choose to not use any CSS frameworks at all and that also works.

This repo contains the boiler plate setup, list of dependencies (package.json)

Only Bootstrap may be used for UI components; no other libraries are allowed. You can do without using bootstrap as well.
To begin working on this assessment:

First copy everything in this repo to your own new repo, which should be made private.
Npm install the dependencies, and then run the React client.

Go through the below Overview section to get a general understanding of what the code base currently contains.

Do all of the work in your own new private repo and push your commits as you complete them.

You are now ready to start coding, feel free to use any programming tools and aids you please. Also we are not looking for some beautiful UI here, please focus on usability and not on aesthetics. But do understand that you will later need to explain your work and make modifications on the fly during interactions with the Homble team.

After you are done with your work and you are ready to submit it for evaluation, please add the owner of this repo, ashishHomble, as a collaborator in your private repo. And email tech@homble.in saying that you have submitted your work for evaluation. Do ensure that you have pushed the latest changes in the repo. Without these final steps, we will not be able to evaluate your work.

Wish you all the best! 🙂

Overview of the Repo
This is the frontend repo created with Create React App and we have stripped off of all the unnecessary code.
App Router is the place for all the routes
Screens and Components folder as explanatory are places to add screens and their related components.

Our Expectations and Coding Style Guidelines
Show us you are knowledgeable, organised, detail oriented and thorough.
We have tried to write out our challenges clearly and in detail, at least initially, so that you get our general approach. Please do read the requirements carefully to ensure you understand exactly what is asked before you jump into writing code.
We are first looking for readability and elegance (even if you cannot fully do what is asked), then effectiveness of the code (doing what is asked), and finally the usability of the interfaces.
Needless to say, name things appropriately.
Your comments need not say what you are doing (since we can just read your code for that), but should instead say why you are doing what you are doing (since we absolutely cannot read your mind). 🙂
Keep the coding style and practices as consistent as possible with the existing code as the example.
Please create small git commits, one for each assessment task, so that we can understand how your code evolved with the changing challenges. Please provide reasonable commit summaries and descriptions.
Do code the challenges in the given order, and create a separate commit for each assessment module.

Required Challenges
This section has 3 tasks, so we need 3 commits.
Task 1: Product Listing Page
Objective: Create a route and a page to display a list of products.
Details:
Fetch product data from the server using the endpoint: /product
Sort the products based on their selling price.
Display the products in a responsive grid:
3 columns on large screens
2 columns on medium screens
1 column on mobile devices

Handle products with multiple images appropriately, ensuring that each image can redirect according to its redirect URL.
Use skeleton components while products are loading
Create a “Add Product Button”:
Opens a modal with 3 input fields and “Add” button:
Product Name
Product Description
Product Allergen Info
On Click “Add” - Should submit a post request to endpoint: /product

Task 2: Individual Product Details
Objective: Create a details view page for individual products.
Details:
Fetch individual product data from the server using the endpoint: /products/:id.
Display product information including product name, price, description, allergens, and usage instructions.
Implement expandable/collapsible sections for the description, allergen information, and usage.
Show a “Loading…” text when details are loading

Task 3: Improving code
Objective: Ensure that the implemented screens are optimised and resilient.
Details:
Develop a custom hook for fetching data from the server and sending patch requests.
Ensure you handle errors—simply show a text message: “Something went wrong.”
Memoize the computed values.

Bar Raiser: Dashboard
This is optional but would help us understand your current proficiency level, so do give it a try anyways.

Objective: Creating a dashboard (a table interface) for managing products.
Details:
Get list of products with ids, quantities and name from endpoint /products-inward
Create a table like interface with headings and buttons to sort the data.
Implement sorting functionality that allows sorting by product ID, quantity, or name.
Enable functionality to "inward" products without reloading the page, allowing continuous operations.
Add a search bar that supports "contains" search for product name or ID.

Do remember to push all the commits in your repo. Otherwise we will not be able to test your work.
