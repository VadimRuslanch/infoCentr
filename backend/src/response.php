<?php
function response($numderResponse, $textResponse)
{
    header("Content-Type: application/json");
    http_response_code($numderResponse);
    echo json_encode(["message" => $textResponse]);
}
