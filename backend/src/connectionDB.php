<?php
define("DB_HOST", "localhost:3306");
define("DB_USER", "root");
define("DB_PASSWORD", "root");
define("DB_NAME", "sys");



function connectionDB()
{
    
    $mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD);
    
    if (!$mysqli->connect_error) {
        $mysqli->select_db(DB_NAME);
    } else {
        response(500, `Ошибка подключения к БД`);
    }

    // Блок создания таблицы, если ее нет.

    // $insertQuery ="CREATE TABLE $nameTable (
    //     id INT AUTO_INCREMENT PRIMARY KEY,
    //     name VARCHAR(75),
    //     email VARCHAR(75),
    //     phone VARCHAR(20),
    //     date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    // )";
    // if ($mysqli->query($insertQuery)) {
    //     response(200, "Таблица успешно создана");
    // } else {
    //     response(500, "Ошибка при создании таблицы: " . $mysqli->error);
    // }

    return $mysqli;
}