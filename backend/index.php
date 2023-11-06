<?php
include('./src/connectionDB.php');
include('./src/response.php');
include('./src/submit.php');
include('./src/validator.php');
include('./src/repeatCheck.php');

header("Access-Control-Allow-Origin: http://localhost:8080");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header("HTTP/1.1 200 OK");
    exit;
}

$mysqli = connectionDB();

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $json = file_get_contents('php://input');

    $data = json_decode($json);

    $name = $data->name;

    $email = $data->email;

    $phone = $data->phone;


    $validationErrors = validate($name, $email, $phone);
    $repeatErrors = repeatCheck($mysqli, $name, $email, $phone);

    if (empty($validationErrors) && empty($repeatErrors)) {
        submit($mysqli, $name, $email, $phone);
    } else {
        response(400, implode("Некорректные данные ", $validationErrors ? $validationErrors : $repeatErrors));
    };
} else {
    response(403, "Недостаточно прав");
}

$mysqli->close();