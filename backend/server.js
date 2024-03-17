const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Connect to the database
const db = new sqlite3.Database('users.db');
db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT UNIQUE, password TEXT)');
});

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Route to handle signup request
app.post('/api/signup', (req, res) => {
    const { name, email, password } = req.body;

    // Check if user already exists
    db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
        if (err) {
            return res.status(500).send('Internal server error');
        }
        if (row) {
            return res.status(400).send('User already exists');
        }

        // Insert new user into the database
        db.run('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, JSON.stringify(password)], (err) => {
            if (err) {
                return res.status(500).send('Internal server error');
            }
            res.status(201).send('Account created successfully');
        });
    });
});

// Route to handle signin request
app.post('/api/signin', (req, res) => {
    const { email, password } = req.body;

    // Find user by email
    db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
        if (err) {
            return res.status(500).send('Internal server error');
        }
        if (!row) {
            return res.status(404).send('User not found');
        }
        
        const parsedPassword = JSON.parse(row.password);
        const stringifiedPassword = JSON.stringify(password);

        if (JSON.stringify(parsedPassword) === stringifiedPassword) {
            res.send('Signed in successfully');
        } else {
            console.log(parsedPassword);
            console.log(stringifiedPassword);
            res.status(401).send('Incorrect password');
        }

    });
});

// Serve the frontend HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
