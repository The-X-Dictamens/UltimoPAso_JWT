const express = require('express')

const dotenv = require('dotenv')

const cookieParser = require('cookie-parser')

const app = express()
//seteado de motoro de poatnillas
app.set('view engine', 'ejs');

//ahora seteo de carptea public
app.use(express.static('/public'))

//pa que procede datos
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//seteamos las variables de entrono

dotenv.config({ path: './env/.env' })

//setep de ;as galletitas
//app.use(cookieParser)


//llamar al router
app.use('/', require('./routes/router'))

//app.get('/', (req, res) => {
    //res.send('gelouda ')
//}) nos manejaremos desde el router


app.listen(3000, () => {
    console.log('Hola nigeriano')
    console.log('server running en http://localhost:3000' )

})
