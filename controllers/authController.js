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
        console.log(error)

    }

    

    //ahora creamos la sentencia sql para insertar los datos
}

//cierren los ojos que se viene el inicio de sesion

exports.login = async (req, res) => {
    try {
        const user = req.body.user
        const pass = req.body.passw


        if (!user || !pass) {
            res.render('login', {
                alert: true,
                alertTitle: "Advertencia",
                alertMessage: "Ingresa algo o se te metera ",
                alertIcon: 'info',
                showConfirmButton: true,
                timer: false,
                ruta: 'login'
            })
        } else {
            conexion.query('SELECT * FROM users WHERE  user = ?', [user], async (error, results) => {
                
                if (results.length == 0 || ! ( await bcrypt.compare(pass, results[0].pass))) {
                    res.render('login', {
                        alert: true,
                        alertTitle: "Error",
                        alertMessage: "ACuerdate de tu pass o se metera ",
                        alertIcon: 'error',
                        showConfirmButton: true,
                        timer: false,
                        ruta: 'login'
                    })
                    
                } else {//si esta ttodo bien ya esta pos validado
                    //hijo de su pinche madre, no cerraste la boca y ya sae te vino el jason       WT
                    const id = results[0].id
                    //ocupamos nuestra clave secreta para el cifradito
                    const token = jwt.sign({ id: id }, process.env.JWT_SECRETO, {
                        expiresIn: process.env.JWT_TIEMPO_EXPIRA
                    })
                    
                    console.log("CODIGOS NUCLES " + token + " para  a " + user)
                    
                    //ahora configuremos nuestra galletita de mota

                    const cookieOptions = {
                        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                        httpOnly: true
                    }

                    res.cookie('jwt', token, cookieOptions)
                    res.render('login', {
                        alert: true,
                        alertTitle: " Nectado",
                        alertMessage: "Ya no se metera ",
                        alertIcon: 'aucces',
                        showConfirmButton: false,
                        timer: 800,
                        ruta: ''
                    })
                }
                
            })
        }
    } catch (error) {
        console.log(error)
    }
}