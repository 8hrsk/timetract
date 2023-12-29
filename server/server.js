const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

const { PORT } = process.env;

const rootDir = path.resolve(__dirname, '../');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(rootDir + '/build'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/build/index.html');
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})