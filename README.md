# CVWO Winter Assignment 2024/25

This project is made possible under the help of NUS CVWO winter Assignment. This is my first ever web project. 

It consists of a 3 pages, Sign in, Sign out and a Home page with a simple login authentication system. UI ideas were borrowed from https://mui.com/material-ui/getting-started/templates/?srsltid=AfmBOop62iN-VqxOEX9Xp4qIJHRbFrOdGYtdus58WXCNrhqFWURjyjuK


## Instructions for installations

### Prerequisites
- Node.js
- MySQL

### Clone the repository

### Navigate to project directory

### Install dependencies
npm install

### Set up MySQL Database:
mysql -u root -p

CREATE DATABASE cvwo_db;

USE cvwo_db;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

### Create .env file in the backend directory:
DB_HOST=localhost

DB_USER=root

DB_PASSWORD=their_mysql_password

DB_NAME=cvwo_db

## Start the Application:
cd backend 

node server.js

cd ..

cd cvwo

npm start
