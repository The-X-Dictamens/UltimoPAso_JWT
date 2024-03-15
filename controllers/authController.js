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