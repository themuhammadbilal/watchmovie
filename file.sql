-- Connect to the MySQL server using the command line or a tool like phpMyAdmin

-- Create a new database
CREATE DATABASE MovieChat;

-- Use the new database
USE MovieChat;

-- Create a table for storing messages
CREATE TABLE ChatMessages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255),
    message TEXT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert a sample message
INSERT INTO ChatMessages (username, message) VALUES ('user1', 'Hello, World!');

-- Retrieve messages
SELECT * FROM ChatMessages;