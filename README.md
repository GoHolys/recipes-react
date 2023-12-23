# Project Title

This project is a frontend React application that allows users to browse and search for meal recipes and favorite them.

## API Reference

This project uses the MealDB API to retrieve meal data.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of Node.js.

## Installing

To install this project, follow these steps:

1. Clone the repo
2. Open the project in your preferred code editor
3. Install dependencies by running `npm install`
4. Start the development server by running `npm run dev`

## Usage

To use this project, follow these steps:

1. Navigate to the project directory
2. Run `npm run dev`
3. Open http://localhost:5173 in your browser

## Comments

1. The API does not have an add post route, which means that users cannot add new recipes to the database through the API. Instead, the addition process is implemented on the frontend  and saved in the local storage, along with the favorites.

2. When fetching meals according to categories using TheMealDB API, the API does not provide the object of the meal with the full information. As a result, the instructions are not displayed on the meal card. Instead, the instructions are displayed in the drawer.
