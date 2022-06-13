-- -------------------------------------------------------- --
-- 
-- Name: 3-theraphy.sql
-- Author: Juan Sebastian Reyes Leyton (sebas.reyes2002@hotmail.com)
-- Version: 1.0
-- Description: Build a database with theraphy tables needed by project
-- 
-- -------------------------------------------------------- --

-- -------------------------------------------------------- --
--                 DATABASE CONFIGURATION                   --
-- -------------------------------------------------------- --

-- While the system is in development step run this command
DROP DATABASE IF EXISTS sitefodi_theraphy;

-- Create the database for the project
CREATE DATABASE IF NOT EXISTS sitefodi_theraphy;

-- Grant privileges by dev user
GRANT ALL PRIVILEGES ON sitefodi_theraphy.* TO 'dev'@'%';

-- Refresh the privileges
FLUSH PRIVILEGES;

-- -------------------------------------------------------- --
--                   DATABASE DEFINITION                    --
-- -------------------------------------------------------- --

USE sitefodi_theraphy;

-- Theraphy table

CREATE TABLE theraphy_table ( 

    id                  INTEGER AUTO_INCREMENT,
    urlTheraphy         TEXT NOT NULL,
    dateT               DATETIME NOT NULL,
    idRelation          INTEGER NOT NULL,
    idTest              INTEGER,
    test                TINYINT(1) NOT NULL DEFAULT 1,
    PRIMARY KEY (id),
    FOREIGN KEY (idRelation) REFERENCES sitefodi_users.relation_therapist_patient_table(id),
    FOREIGN KEY (idTest) REFERENCES sitefodi_tests.test_table(id) 

) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

