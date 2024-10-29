# Girman Technologies - Frontend Developer Assignment

This repository contains a search-based web application developed as part of an assignment for Girman Technologies. The application is built using **React.js** and the **Shadcn component library** to provide a clean, minimalistic UI that follows the design principles specified in the provided Figma layout.

## Project Overview

This project showcases skills in front-end development, including responsive UI design, state management, and edge case handling. The application includes a **landing page** with branding and navigation, as well as a **search results page** that displays user information based on search input. The app is deployed on **Netlify** for live accessibility.

## Features

### 1. Home Screen

- **Minimalistic Landing Page**: Designed in line with Girman Technologies branding, similar to Google's search page.
- **Navigation Bar**: Links for:
  - **Website** - redirects to [girmantech.com](http://girmantech.com)
  - **LinkedIn** - redirects to Girman Technologies' LinkedIn company page
  - **Contact** - opens the default email client with a prefilled email to contact@girmantech.com
- **Search Box**: Users can input search terms to search for user information.

### 2. Search Results Page

- **Card-Based UI**: Displays results with user information, including First Name, Last Name, Address, and Phone Number, along with a placeholder image.
- **Fetch Details**: Each card has a "Fetch Details" button, which opens a dialog box showing detailed user information.
- **Empty State**: Displays a message when no search results are found, matching the provided design specifications.

### 3. Data Management

- **Local JSON Data**: User information is stored in a JSON file within the project, which is loaded and read locally to provide search results.
- **Error Handling**: Handles edge cases like invalid input, empty results, and other potential errors.

## Technology Stack

- **Frontend**: React.js, React Router for routing
- **UI Components**: Shadcn component library (Dialog component used for detailed view)
- **Deployment**: Netlify

## Installation

To run this project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/RAVIROCK916/Girman-Technologies.git
   ```

2. Install dependencies:

   ```bash
    npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and navigate to http://localhost:5173 to view the application.

## Deployment

The project is deployed on Netlify. Access the live version here.

## Project Structure

- src/components: Contains reusable components like SearchBox, NavBar, and Card.
- src/pages: Houses the main page components - Home and Search Results.
- src/data/users.json: Stores the user data used for search functionality.

## Edge Cases

The application is designed to handle:

- No Results Found: An empty state UI is displayed when no search results are returned.
- Invalid Input: Validates input and provides feedback for any invalid entries.
- Error Messages: Displays user-friendly messages for network or data errors.

## Resources

- [React Documentation](https://react.dev/)
- [Shadcn Component Library](https://ui.shadcn.com/)

## License

This project is licensed under the MIT License.
