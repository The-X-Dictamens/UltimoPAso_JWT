const mysql = require('mysql2')

const conexion = mysql.createConnection({

    host: process.env.DB_HOST,

    user: process.env.DB_USER,

    password: process.env.DB_PASSw,

    database: process.env.DB_DATABASE,
    

})

conexion.connect( (error) => {
    if (error) {
        console.log('EL error esta al nacer porque: ' + error)
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

/**
 * Enter password: *********
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 31
Server version: 8.0.36 MySQL Community Server - GPL

Copyright (c) 2000, 2024, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> ALTER USER 'root'@'localhost'
    -> IDENTIFIED WITH mysql_native_password BY 'your_new_password';
Query OK, 0 rows affected (0.01 sec)

mysql>

 */

