const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const port = 3010;

const app = express();

// Middleware to parse JSON and URL-encoded payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/Students', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Mongodb Connection Successful");
}).catch(err => {
    console.error("Mongodb Connection Error: ", err);
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const Users = mongoose.model('data', userSchema);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/post', async (req, res) => {
    const { name, email, password } = req.body;

    const user = new Users({
        name,
        email,
        password
    });

    await user.save();
    console.log(user);
    res.send("Form Submission Successful");
});

app.listen(port, () => {
    console.log("Server Started at port :", port);
});
