-- -------------------------------------------------------- --
-- 
-- Name: 3-results.sql
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