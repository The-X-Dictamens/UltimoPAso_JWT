const express = require('express')

const dotenv = require('dotenv')

const cookieParser = require('cookie-parser')

const app = express()

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('gelouda ')
})
app.listen(3000, () => {
    console.log('Hola niger')
})
