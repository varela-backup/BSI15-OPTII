<?php

header('Content-Type: application/json;charset=UTF-8');
header('Accept: application/json');
header("Access-Control-Allow-Origin: *");

sleep(3);

$content = json_decode( file_get_contents("php://input"), true );
echo json_encode($content);

// $folder = $_SERVER['SCRIPT_NAME'];
// $method = strtolower($_SERVER['REQUEST_METHOD']);
// parse_str($_SERVER['QUERY_STRING'], $param);

// $handle = include ".".$folder.".php";
// $handle->$method($param);

// $db = include "./framework/Connection.php";
// $db->select();