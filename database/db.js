const mysql = require('mysql2')

const conexion = mysql.createConnection({
    host: process.env.DB_HOST,

    user: process.env.DB_USER,

    password: process.env.DB_PASS,

    datanabase: process.env.DB_DATABASE
    

})

conexion.connect(() => {
    if (error) {
        console.log('EL error esta al nacer: ' + error)
        return

    }
    console.log('cockNectado')
})

module.exports = conexion