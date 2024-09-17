# Online Recipe Application

## Overview
The Online Recipe Application is a web-based platform built with ReactJS and JSON Server. It allows users to store, manage, and refer to their favorite dishes as recipes. Users can search, add, edit, and delete recipes, and the application is equipped with user authentication to protect user data.

## Features

### Pages

1. Login Page

* Users can log in with their credentials.

2. Registration Page

* New users can register.

3. Home Page

* Displays the list of recipes.

### Recipe Features

1. Search Function

* Users can search for recipes by keyword.

2. Add Function

* Users can add a new recipe with the following details:
    * Recipe Name
    * Ingredients
    * Instructions
    * Category (e.g., Dessert, Main Course, Appetiser)
    * Preparation Time
    * Cooking Time
    * Servings
    * Image

3.  Delete Function

* Users can delete existing recipes from the list.

4. Update Function

* Users can edit existing recipes.

### Recipe Categories

* Use categories to classify recipes (e.g., Breakfast, Lunch, Dinner).

### General Requirements

1. CRUD Operations

* Implement Create, Read, Update, Delete operations for recipes.

2. JSON Server

* Use JSON server to store and manage recipe data.

3. Endpoints

* Use a GET request to fetch all recipes.
* Use a POST request to add a new recipe.
* Use a DELETE request to remove an existing recipe.
* Use a PATCH/PUT method to update a recipe.

4. Responsive Design

* Ensure the application is responsive and user-friendly.

5. User Authentication and Authorization

* User authentication and authorization to protect user data.

## Getting Started


### Installation

1. Clone the repository:

```
    git clone https://github.com/ComfortN/recipe_app.git
```
2. Navigate to the project directory:

```
    cd recipe_app
```

3. Install dependencies:

```
    npm install
```

4. Start the JSON server:

```
    npm run json-server

5. Start the React application:

```
    npm start
```

## Usage

1. Login

* Navigate to the login page and enter your credentials to log in.

2. Register

* Navigate to the registration page and fill in the required details to create a new account.

3. Add Recipe

* Navigate to the "Add Recipe" page and fill in the recipe details to add a new recipe.

4. Edit Recipe

* Click on an existing recipe and update the details to edit it.

5. Delete Recipe

* Click on the delete button next to a recipe to remove it from the list.

6. Search Recipe

* Use the search bar to find recipes by keyword.