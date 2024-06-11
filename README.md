# Graphical Password Authentication System

## Overview

This project is a graphical password authentication system designed to provide an innovative and secure method of user authentication. Users select a series of images as their password instead of traditional alphanumeric passwords. This project is implemented using Express.js for the backend, SQLite3 for the database, and a simple frontend for user interaction.

## Features

- **Graphical Password Authentication**: Users can create and authenticate using a series of images.
- **Secure Password Storage**: Passwords are hashed using bcrypt to ensure security.
- **User-friendly Interface**: Intuitive frontend for easy user interaction.
- **Efficient Data Management**: Utilizes SQLite3 for lightweight and efficient database management.

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend server.
- **Express.js**: Web framework for Node.js to create the server and handle routes.
- **SQLite3**: Database for storing user data securely.
- **bcrypt**: Library for hashing passwords.
- **HTML/CSS/JavaScript**: Frontend technologies for building the user interface.

## Project Structure

```
project-root/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── users.db
│
├── frontend/
│   ├── index.html
│   ├── styles.css
│   └── main.js
│
└── README.md
```

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v14.x or later)
- npm (v6.x or later)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/maheshwaranandh/_Graphical-Password-Authentication-System
    cd _Graphical-Password-Authentication-System/backend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the server:**

    ```bash
    npm start
    ```

4. **Open the frontend:**

    Open the `index.html` file in the `frontend` directory using any web browser.

## Usage

### Sign Up

1. Open the application in your web browser.
2. Click on the "Sign Up" button.
3. Enter your name and email.
4. Select a series of images as your password.
5. Click "Sign Up" to create your account.

### Sign In

1. Open the application in your web browser.
2. Click on the "Sign In" button.
3. Enter your email.
4. Select the same series of images you used during sign-up.
5. Click "Sign In" to log in to your account.

## Security

- Passwords are hashed using bcrypt before being stored in the SQLite3 database, ensuring that user passwords are not stored in plaintext.
- The graphical password system adds an additional layer of security compared to traditional alphanumeric passwords.

## Contributing

We welcome contributions to enhance this project. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes.
4. Submit a pull request with a detailed description of your changes.


## Acknowledgments

- Thanks to the creators of Node.js, Express.js, and SQLite3 for their excellent tools and libraries.
- Special thanks to all contributors and users who have supported this project.

## Contact

For any questions or feedback, please contact:

- Name: Maheshwar Anandh M
- Email: maheshwaranandh@gmail.com
- GitHub: [maheshwaranandh](https://github.com/maheshwaranandh)

---

Feel free to fork this repository and make improvements! Happy coding!
