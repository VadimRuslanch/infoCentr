<?php
function repeatCheck($mysqli, $name, $email, $phone, $nameTable)
{
    $errors = [];

    $queryReplay = "SELECT *
                    FROM $nameTable
                    WHERE name = '$name' AND email = '$email' AND phone = '$phone'";
    $queryData = "SELECT date FROM $nameTable WHERE date < DATE_ADD(NOW(), INTERVAL 5 MINUTE)";

    $resReplay = $mysqli->query($queryReplay);
    $resData = $mysqli->query($queryData);

    if (!$resReplay || !$resData) {
        $errors[] = "Ошибка запроса: " . $mysqli->error;
    }

    if ($resReplay->num_rows && $resData->num_rows > 0) {
        $errors[] = "Вы уже записались";
    }

    return $errors;
}
