<?php
function submit($mysqli, $name, $email, $phone, $nameTable)
{
    $insertQuery = "INSERT INTO $nameTable (name, email, phone) VALUES ('$name', '$email', '$phone')";
    if ($mysqli->query($insertQuery) === TRUE) {
        response(200, "Данные успешно сохранены");
    } else {
        response(500, "Данные не сохранены, ошибка на сервере");
    }
}
