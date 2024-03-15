const jwt = require('jsonwebtoken')

const bcrypt = require('bcryptjs')

const conexion = require('../database/db')

const { promisify } = require('util')
const { use } = require('../routes/router')

//PRocedimiento parea hacer la registracion

exports.register = async (req, res) => {
    //con esto llamaremos a los muchachines

    const name = req.body.name
    const user = req.body.user
    const nombre = req.body.Users
    const pass = req.body.pass
    //pero esto tenemos que especificarlo en nueestro enrutador
    console.log(name + ' - ' + user +' - '+nombre+ ' - '+ pass)
}