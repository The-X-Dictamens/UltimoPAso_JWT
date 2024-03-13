const mysql = require('mysql2')

const conexion = mysql.createConnection({

    host: process.env.DB_HOST,

    user: process.env.DB_USER,

    password: process.env.DB_PASS,

    database: process.env.DB_DATABASE,
    

})

conexion.connect((error) => {
    if (error) {
        console.log('EL error esta al nacer: ' + error)
        return

    }
    console.log('cockNectado')
})

module.exports = conexion

/**
 * SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ventas
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ventas
-- -----------------------------------------------------
CREATE Database IF NOT EXISTS `login_node_jwt` DEFAULT CHARACTER SET utf8 ;
USE `login_node_jwt` ;

-- -----------------------------------------------------
-- Table `ventas`.`login_node_jwt`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ventas`.`tblproductos` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `user` VARCHAR(50) NULL,
  `name` VARCHAR(100) NULL,
  `pass` VARCHAR(255) NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

 */