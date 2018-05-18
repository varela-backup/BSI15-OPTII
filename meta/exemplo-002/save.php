<?php

$data = json_decode( file_get_contents('php://input') );
file_put_contents('data.json', json_encode($data));

echo json_encode([
    "error" => "no errors",
    "msg" => "bunitu"
]);