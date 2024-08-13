const express = require('express');
const path = require('path');
const connection = require('./connection'); // Ensure this path is correct

const port = 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/post', (req, res) => {
    const { name, email, password } = req.body;

    const query = 'INSERT INTO UserData (name, email, password) VALUES (?, ?, ?)';
    connection.query(query, [name, email, password], (err, results) => {
        if (err) {
            console.error('Error saving user:', err);
            res.status(500).send('Error saving user');
            return;
        }
        console.log('User saved:', results);
        res.send('Form Submission Successful');
    });
});

app.listen(port, () => {
    console.log('Server Started at Port:', port);
});
