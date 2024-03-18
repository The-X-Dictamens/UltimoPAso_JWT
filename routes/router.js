//las rutas para el controlador

const express = require('express')

const router = express.Router() 

const conexion = require('../database/db')



//1.R
const authController = require('../controllers/authController')

//esto e spa las vistar
router.get('/', authController.isAuthenticated , (req, res) => {
    //conexion()
    res.render('index' ,{user:req.user})
})



router.get('/login', (req, res) => {
    res.render('login', {alert:false})
})


router.get('/register', (req, res) => {
    res.render('register')//pero primero necesitamos hacer un require de nuestro controlador 1.R
})

//aqui pa las vistas

//rputer para los metodos del controler
//hay que fijarnos en el formulario que metodo pusimos
router.post('/register', authController.register)

router.post('/login', authController.login)
//verbo hhtp get

router.get('/logout', authController.logout)



module.exports = router