# React Todo App

A simple yet effective todo app built with React to help you stay organized and productive.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Add Todos:** Create new todos with a title and optional description.
- **Mark as Complete:** Easily toggle the completion status of each todo.
- **Responsive Design:**  The app adapts to different screen sizes, ensuring a great user experience on desktops, tablets, and mobile devices.

## Demo

[Link to your deployed app] (if applicable)

## Technologies Used

- **React:** Frontend library for building user interfaces.
- **CSS:** Custom styles for appearance and layout.

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone [https://github.com/ankitkr-04/todo.git](https://github.com/ankitkr-04/todo.git)
2.  **Navigate to Project Directory:**

    Bash

    ```
    cd todo

    ```

3.  **Install Dependencies:**

    Bash

    ```
    npm install

    ```

3.  **Start Development Server:**

    Bash

    ```
    npm run dev

    ```

    Open your browser and visit `http://localhost:5173/` (or the specified port) to view the app.

Usage
-----

-   **Add Todo:**

    1.  Enter a title in the "Title" input field.
    2.  (Optional) Enter a description in the "Description" text area.
    3.  Click "Add Todo" or press Enter.
-   **Toggle Completion:** Click the "Incomplete" or "Completed" button on a todo item.

Project Structure
-----------------

```
todo/
├── public/         # Public assets (index.html, favicon, etc.)
├── src/            # Source code
│   ├── components/ # Reusable components
│   │   ├── TodoCard.jsx
│   │   ├── TodoInput.jsx
│   │   └── TodoList.jsx
│   ├── App.jsx      # Main app component
│   └── index.css    # Stylesheet
├── .gitignore      # Git ignore file
├── package.json     # Project dependencies
├── README.md       # This file
└── vite.config.js  # Vite configuration (if using Vite)

```

Styling
-------

-   The project includes a custom CSS reset to remove default browser styles.
-   Styling for the app is done using CSS in the `index.css` file.

Contributing
------------

Contributions are welcome! Please open an issue or submit a pull request.

License
-------

This project is licensed under the MIT License.
