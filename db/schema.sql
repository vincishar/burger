#USE burgers_db OR CREATE DATABASE burgers_db;
CREATE TABLE IF NOT EXISTS burgers(
  id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  burger_name VARCHAR(25) NOT NULL,
  devoured BOOLEAN NOT NULL DEFAULT false
);