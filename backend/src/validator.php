<?php
function validate($name, $email, $phone)
{
    $errors = [];

    if (!isValidName($name)) {
        $errors[] = "имени,";
    }

    if (!isValidEmail($email)) {
        $errors[] = " почты,";
    }

    if (!isValidPhone($phone)) {
        $errors[] = " телефона,";
    }
    return $errors;
}

function isValidName($name)
{
    return (preg_match('/^[а-яА-ЯёЁa-zA-Z\s]+$/u', $name) && strlen($name) > 2 && strlen($name) <= 70);
}

function isValidEmail($email)
{
    return (filter_var($email, FILTER_VALIDATE_EMAIL) && preg_match('/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/', $email));
}

function isValidPhone($phone)
{
    return (preg_match('/^[0-9]+$/', $phone) && strlen($phone) <= 13);
}