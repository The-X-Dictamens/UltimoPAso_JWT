const jwt = require('jsonwebtoken')

const bcrypt = require('bcryptjs')

const conexion = require('../database/db')

const { promisify } = require('util')

//PRocedimiento parea hacer la registracion

exports.register = async (req, res) => {
    //con esto llamaremos a los muchachines

    const name = req.body.name
    const user = req.body.user
    const pass = req.body.pass
    //pero esto tenemos que especificarlo en nueestro enrutador
    
    let passHash =  await bcrypt.hash(pass,8)
}