-- Active: 1684178592108@@127.0.0.1@3306@mybookshelf
CREATE DATABASE mybookshelf;
DROP DATABASE IF EXISTS mybookshelf;
CREATE USER 'mybookshelf'@'localhost' IDENTIFIED BY 'mybookshelf';

GRANT ALL PRIVILEGES ON mybookshelf.* TO 'mybookshelf'@'localhost';

use mybookshelf;

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT
	, name VARCHAR(100)
	, email varCHAR(255)
    , password varchar(255)
    , admin BOOLEAN
    , createdAt DATETIME
    , updatedAt DATETIME
	, PRIMARY KEY (id)
);

DROP TABLE users