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

- Use React and Bootstrap for the frontend development.
- Focus on usability rather than aesthetics.
- Explain your work and be prepared to make on-the-fly adjustments during reviews.

## Overview of the Repo

This repo uses Create React App and includes essential setups:

- **App Router**: Manages all the routes.
- **Screens and Components**: Directories for adding screens and components.

## Assessment Tasks

### Task 1: Product Listing Page

**Objective**: Create a page to display a list of products sorted by price.

**Details**:

- Fetch data from `/product`.
- Display in a responsive grid.
- Implement a skeleton loader.
- Include an "Add Product" modal with fields for product name, description, and allergen info.

### Task 2: Individual Product Details

**Objective**: Build a product details page.

**Details**:

- Fetch data using `/products/:id`.
- Include expandable sections for detailed information.
- Display a loading indicator when data is fetching.

### Task 3: Code Improvement

**Objective**: Optimize and enhance the resilience of your implementation.

**Details**:

- Develop a custom hook for data fetching and sending patch requests.
- Handle errors effectively.
- Memoize computed values.

### Bar Raiser: Dashboard

**Objective**: Create a dashboard for managing products.

**Details**:

- Fetch and display products from `/products-inward`.
- Implement sorting and a live "inward" product functionality.
- Add a "contains" search functionality.

## Submission

Ensure you've pushed all changes and added the repository owner as a collaborator for evaluation.

Good luck!
