# Homble Frontend Assessment

Welcome to the repository for the frontend engineer assessment at Homble. Visit us at [Homble](http://www.homble.in).

## Introduction

We are seeking front-end developers experienced in React. Ideal candidates should have a solid understanding of React principles, including components, state management, lifecycle methods, and API interactions.

## Instructions

1. Clone this repository into your own new private repository.
2. Run `npm install` to install dependencies.
3. Begin the assessment by reviewing the Overview section for a general understanding of the existing code base.
4. Commit your code progressively to your repository.
5. Once complete, add `ashishHomble` as a collaborator to your repository and notify us via email at tech@homble.in.

## Expectations

- Use React and Bootstrap(if required) for the frontend development.
- Focus on usability rather than aesthetics.
- Explain your work and be prepared to make on-the-fly adjustments during reviews.

## Overview of the Repo

This repo uses Create React App and includes essential setups:

- **AppRouter.jsx**: Manages all the routes.
- **Screens and Components**: Directories for adding screens and components.
- **axios.js**: Contains API endpoints info and has basic axios setup.

## Assessment Tasks

### Task 1: Product Listing Page

**Objective**: Create a page to display a list of products sorted by price.

**Details**:

1. Fetch product data from the server using the endpoint: `/api/products`
2. Sort the products based on their selling price.
3. Display the products in a responsive grid:

- 3 columns on large screens
- 2 columns on medium screens
- 1 column on mobile devices

4. Handle products with multiple images appropriately, ensuring that each image can redirect according to its redirect URL.
5. Use skeleton components while products are loading
6. Create a “Add Product Button”:
7. Opens a modal with 3 input fields and “Add” button:

- Product Name
- Product Description
- Product Allergen Info
- On Click “Add” - Should submit a post request to endpoint: `/api/products`

### Task 2: Individual Product Details

**Objective**: Build a product details page.

**Details**:

1. Fetch individual product data from the server using the endpoint: `/api/products/:id`.
2. Display product information including product name, price, description, allergens, and usage instructions.
3. Implement expandable/collapsible sections for the description, allergen information, and usage.
4. Show a “Loading…” text when details are loading.

### Task 3: Code Improvement

**Objective**: Optimize and enhance the resilience of your implementation.

**Details**:

1. Develop a custom hook for fetching data from the server and sending patch requests.
2. Ensure you handle errors—simply show a text message: “Something went wrong.”
3. Memoize the computed values.

### Bar Raiser: Dashboard

This is optional but would help us understand your current proficiency level, so do give it a try anyways.

**Objective:** Creating a dashboard (a table interface) for managing products.

**Details:**

- Get list of products with ids, quantities and name from endpoint `/api/dashboard`
- Create a table like interface with headings and buttons to sort the data.
- Implement sorting functionality that allows sorting by product ID, quantity, or name.
- Enable functionality to "inward" products without reloading the page, allowing continuous operations.
- Add a search bar that supports "contains" search for product name or ID.

## Submission

Ensure you've pushed all changes and added the repository owner as a collaborator for evaluation.

Good luck!
