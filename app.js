var express = require('express');
var app = express();
var path = require('path');

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(PORT, ()=> {
    console.log('Servidor corriendo en http://localhost:'+ PORT);
});

app.get('/', (req,res) => {
    let file = path.join(__dirname, '/views/home.html');
    res.sendFile(file);
});

app.get('/registro', (req,res) => {
    let file = path.join(__dirname, '/views/register.html');
    res.sendFile(file);
});

app.get('/login', (req,res) => {
    let file = path.join(__dirname, '/views/login.html');
    res.sendFile(file);
});