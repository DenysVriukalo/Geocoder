-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema geocoder
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema geocoder
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `geocoder` DEFAULT CHARACTER SET utf8 ;
USE `geocoder` ;

-- -----------------------------------------------------
-- Table `geocoder`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `geocoder`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `real_name` VARCHAR(200) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `birth_date` DATE NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `geocoder`.`user_hist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `geocoder`.`user_hist` (
  `user_id` INT NOT NULL,
  `registration_date_time` INT NOT NULL,
  PRIMARY KEY (`user_id`),
  CONSTRAINT `fk_user_hist_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `geocoder`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;

USE `geocoder`;

DELIMITER $$
USE `geocoder`$$
CREATE DEFINER = CURRENT_USER TRIGGER `geocoder`.`user_AFTER_INSERT` AFTER INSERT ON `user` FOR EACH ROW
BEGIN
	insert into user_hist values (new.id, UNIX_TIMESTAMP());
END$$


DELIMITER ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
