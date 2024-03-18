const jwt = require('jsonwebtoken')

const bcrypt = require('bcryptjs')

const conexion = require('../database/db')

const { promisify } = require('util')
const { use } = require('../routes/router')
const { error } = require('console')

//PRocedimiento parea hacer la registracion

exports.register = async (req, res) => {
    //con esto llamaremos a los muchachines


    try {
        const name = req.body.name
        const user = req.body.user
        const pass = req.body.pass
    //pero esto tenemos que especificarlo en nueestro enrutador
    let passHast = await bcrypt.hash(pass, 8)

        conexion.query('INSERT INTO Users SET ?', { user: user, name: name, pass: passHast }, (error, results) => {
            if (error) { console.log(error) }
            res.redirect('/')
        })
    } catch (error) {
        console.log('primer catch'+error)

    }

    

    //ahora creamos la sentencia sql para insertar los datos
}

//cierren los ojos que se viene el inicio de sesion

exports.login = async (req, res)=>{
    try {
        const user = req.body.user
        const pass = req.body.pass        

        if(!user || !pass ){
            res.render('login',{
                alert:true,
                alertTitle: "Advertencia",
                alertMessage: "Ingrese un usuario y password",
                alertIcon:'info',
                showConfirmButton: true,
                timer: false,
                ruta: 'login'
            })
        }else{
            conexion.query('SELECT * FROM users WHERE user = ?', [user], async (error, results)=>{
                if( results.length == 0 || ! (await bcrypt.compare(pass, results[0].pass)) ){
                    res.render('login', {
                        alert: true,
                        alertTitle: "Error",
                        alertMessage: "Usuario y/o Password incorrectas",
                        alertIcon:'error',
                        showConfirmButton: true,
                        timer: false,
                        ruta: 'login'    
                    })
                }else{
                    //inicio de sesión OK
                    const id = results[0].id
                    const token = jwt.sign({id:id}, process.env.JWT_SECRETO, {
                        expiresIn: process.env.JWT_TIEMPO_EXPIRA
                    })
                    //generamos el token SIN fecha de expiracion
                   //const token = jwt.sign({id: id}, process.env.JWT_SECRETO)
                   console.log("TOKEN: "+token+" para el USUARIO : "+user)

                   const cookiesOptions = {
                        expires: new Date(Date.now()+process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                        httpOnly: true
                   }
                   res.cookie('jwt', token, cookiesOptions)
                   res.render('login', {
                        alert: true,
                        alertTitle: "Conexión exitosa",
                        alertMessage: "¡LOGIN CORRECTO!",
                        alertIcon:'success',
                        showConfirmButton: false,
                        timer: 800,
                        ruta: ''
                   })
                }
            })
        }
    } catch (error) {
        console.log('ultiomo catch'+error)
    }
}

//metodo para saber si el usuario es negro o no

exports.isAuthenticated = async (req, res, next) => {
    if (req.cookies.jwt) {
        try {
            //primero verificamos si el token  bufa(es verdadero)
            const decodificada = await promisify(jwt.verify)(req.cookies.jwt, promisify.JWT_SECRETO)
            //ahora checamos si si esta en la bd
            conexion.query('SELECT * FROM users WHERE id = ?', [decodificada.id], (error, results) => {
                if (!results) { return next() }
                req.user = results[0]
                return next()
            })
        } catch (error) {
            //y pyes si no de nuevo al loby
            
            console.log('tercercatch'+error)
        }
    } else {
        res.redirect('/login')
        next()
        
    }
    //y esta verificacion la haremos en nuestras rutas del router
}

//ahora el last para el log out

exports.logout = (req, res) => {
    res.clearCookie('jwt')
    return  res.redirect('/')
}