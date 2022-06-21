-- -------------------------------------------------------- --
-- 
-- Name: 4-results.sql
-- Author: Juan Sebastian Reyes Leyton (sebas.reyes2002@hotmail.com)
-- Version: 1.0
-- Description: Build a database with result tables needed by project
-- 
-- -------------------------------------------------------- --

-- -------------------------------------------------------- --
--                 DATABASE CONFIGURATION                   --
-- -------------------------------------------------------- --

-- While the system is in development step run this command
DROP DATABASE IF EXISTS sitefodi_results;

-- Create the database for the project
CREATE DATABASE IF NOT EXISTS sitefodi_results;

-- Grant privileges by dev user
GRANT ALL PRIVILEGES ON sitefodi_results.* TO 'dev'@'%';

-- Refresh the privileges
FLUSH PRIVILEGES;

-- -------------------------------------------------------- --
--                   DATABASE DEFINITION                    --
-- -------------------------------------------------------- --

USE sitefodi_results;

-- Answer type table

CREATE TABLE answer_type_table (

    id      INTEGER AUTO_INCREMENT,
    atype   VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)

);

-- Aswer table

CREATE TABLE answer_table (

    id          INTEGER AUTO_INCREMENT,
    idTherapy  INTEGER NOT NULL,
    idtype      INTEGER NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (idtype) REFERENCES answer_type_table(id),
    FOREIGN KEY (idTherapy) REFERENCES sitefodi_therapy.therapy_table(id)

);

-- Card answer table

CREATE TABLE card_answer_table (

    id          INTEGER,
    idQuestion  INTEGER NOT NULL,
    correct     ENUM('yes', 'no') NOT NULL,
    answer      VARCHAR(255) NOT NULL DEFAULT '',
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES answer_table(id),
    FOREIGN KEY (idQuestion) REFERENCES sitefodi_tests.card_question_table(id)

) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Cards answer table

CREATE TABLE cards_answer_table (

    id          INTEGER,
    idQuestion  INTEGER NOT NULL,
    results     JSON NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES answer_table(id),
    FOREIGN KEY (idQuestion) REFERENCES sitefodi_tests.cards_question_table(id)

);

-- Words answer table

CREATE TABLE words_answer_table (

    id          INTEGER,
    idQuestion  INTEGER NOT NULL,
    results     JSON NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES answer_table(id),
    FOREIGN KEY (idQuestion) REFERENCES sitefodi_tests.words_question_table(id)

);

-- -------------------------------------------------------- --
--                DATABASE DEFAULT VALUES                   --
-- -------------------------------------------------------- --

-- Answer types

INSERT INTO answer_type_table (id, atype) VALUES 
    ( 1, 'Carta' ),
    ( 2, 'Cartas' ),
    ( 3, 'Palabras' );