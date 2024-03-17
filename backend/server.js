const express = require('express');
const sqlite3 = require('sqlite3').verbose();

// Create Express app
const app = express();
const port = process.env.PORT || 3000;

// Create SQLite database connection
const db = new sqlite3.Database('users.db');

// Create users table if not exists
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    )`);
});

// Middleware to parse JSON requests
app.use(express.json());

// User signup endpoint
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;

    // Insert user into database
    db.run('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password], (err) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.status(201).json({ message: 'User created successfully' });
    });
});

// Sign-in endpoint
app.post('/signin', (req, res) => {
    const { email, password } = req.body;

    // Check if user exists in the database
    db.get('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!row) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        res.status(200).json({ message: 'Login successful', user: row });
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
