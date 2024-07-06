-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema talentlink
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema talentlink
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `talentlink` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `talentlink` ;

-- -----------------------------------------------------
-- Table `talentlink`.`clients`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `talentlink`.`clients` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `adress` VARCHAR(255) NOT NULL,
  `phoneNumber` INT NOT NULL,
  `imageUrl` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `talentlink`.`talents`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `talentlink`.`talents` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `imageUrl` VARCHAR(255) NOT NULL,
  `price` INT NOT NULL,
  `category` VARCHAR(255) NOT NULL,
  `rating` VARCHAR(255) NOT NULL,
  `freelancer_id` INT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `talentlink`.`clienttalent`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `talentlink`.`clienttalent` (
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `clientId` INT NOT NULL,
  `talentId` INT NOT NULL,
  PRIMARY KEY (`clientId`, `talentId`),
  INDEX `talentId` (`talentId` ASC) VISIBLE,
  CONSTRAINT `clienttalent_ibfk_1`
    FOREIGN KEY (`clientId`)
    REFERENCES `talentlink`.`clients` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `clienttalent_ibfk_2`
    FOREIGN KEY (`talentId`)
    REFERENCES `talentlink`.`talents` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `talentlink`.`freelancers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `talentlink`.`freelancers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `adress` VARCHAR(255) NOT NULL,
  `phoneNumber` INT NOT NULL,
  `imageUrl` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
INSERT INTO freelances (name, email, password,adress,phoneNumber,imageUrl)
VALUES
("Jane Smith","jane.smith@example.com","password123","789 Maple Avenue"," 2345678901", "https://th.bing.com/th/id/OIP.PXi4EiZawvGKuExNdb8iJwHaE7?w=297&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7")
("Michael Johnson", "michael.johnson@example.com","password123", "101 Main Road, Gotham", "3456789012","https://th.bing.com/th/id/OIP.i_bAvIgZVwOB-3yN_pEDawAAAA?w=278&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7")
( "Emily Davis","emily.davis@example.com", "password123","202 Oak Lane, Star City","4567890123", "https://th.bing.com/th/id/OIP.w8m9TH-Z8hyvBu_9NMLvNgHaFj?w=200&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7")
("Robert Brown","robert.brown@example.com", "password123","303 Pine Street, Central City", "5678901234","https://th.bing.com/th/id/OIP.I6BrdBbXGxqeZHZdJadSagAAAA?w=311&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7")

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;