//las rutas para el controlador

const express = require('express')

const router = express.Router() 

const conexion = require('../database/db')



//1.R
const authController = require('../controllers/authController')

//esto e spa las vistar
router.get('/', (req, res) => {
    //conexion()
    res.render('index')
})



router.get('/login', (req, res) => {
    res.render('login')
})


router.get('/register', (req, res) => {
    res.render('register')//pero primero necesitamos hacer un require de nuestro controlador 1.R
})

//aqui pa las vistas

//rputer para los metodos del controler
//hay que fijarnos en el formulario que metodo pusimos
router.post('/register', authController.register)


module.exports = router