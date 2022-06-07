-- -------------------------------------------------------- --
-- 
-- Name: sitefodi.sql
-- Author: Juan Sebastian Reyes Leyton (sebas.reyes2002@hotmail.com)
-- Version: 1.0
-- Description: Build a database project 
-- 
-- -------------------------------------------------------- --

-- -------------------------------------------------------- --
--                 DATABASE CONFIGURATION                   --
-- -------------------------------------------------------- --

-- While the system is in development step run this command
DROP DATABASE IF EXISTS sitefodi;

-- Create the database for the project
CREATE DATABASE IF NOT EXISTS sitefodi;

-- Grant privileges by dev user
GRANT ALL PRIVILEGES ON sitefodi.* TO 'dev'@'%';

-- Refresh the privileges
FLUSH PRIVILEGES;

-- -------------------------------------------------------- --
--                   DATABASE DEFINITION                    --
-- -------------------------------------------------------- --

USE sitefodi;

-- Rol schema

CREATE TABLE rol_table (

    rol VARCHAR(10) NOT NULL,
    PRIMARY KEY(rol)

) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Document type schema 

CREATE TABLE document_type (

    id      INTEGER AUTO_INCREMENT,
    doctype VARCHAR(30) NOT NULL UNIQUE,
    PRIMARY KEY (id)

) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- User table schema

CREATE TABLE user_table (

    id          INTEGER NOT NULL AUTO_INCREMENT,
    fullname    VARCHAR(255) NOT NULL,
    email       VARCHAR(100) UNIQUE,
    passcode    TEXT,
    usertype    VARCHAR(10),
    doctype     INTEGER,
    docnum      VARCHAR(20) NOT NULL UNIQUE,
    PRIMARY KEY (id),
    FOREIGN KEY (usertype) REFERENCES rol_table(rol),
    FOREIGN KEY (doctype) REFERENCES document_type(id)

) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- -------------------------------------------------------- --
--                DATABASE DEFAULT VALUES                   --
-- -------------------------------------------------------- --

-- Rol

INSERT INTO rol_table (rol) VALUES 
    ('paciente'),
    ('supervisor'),
    ('terapeuta'),
    ('admin');

-- Document type

INSERT INTO document_type (id, doctype) VALUES 
    (1, 'cédula de ciudadanía'),
    (2, 'registro civil'),
    (3, 'tarjeta de identidad'),
    (4, 'otro');