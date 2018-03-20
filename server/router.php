<?php

// print_r($_SERVER);

$folder = $_SERVER['SCRIPT_NAME'];
$method = strtolower($_SERVER['REQUEST_METHOD']);
parse_str($_SERVER['QUERY_STRING'], $param);

$handle = include ".".$folder.".php";
$handle->$method($param);