<?php
define("DB_HOST", "localhost:3306");
define("DB_USER", "root");
define("DB_PASSWORD", "root");
define("DB_NAME", "InfoHealth");

function connectionDB()
{
    $mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD);

    if (!$mysqli->connect_error) {
        $mysqli->select_db(DB_NAME);
    } else {
        response(500, `Ошибка подключения к БД`);
    }
    return $mysqli;
}
