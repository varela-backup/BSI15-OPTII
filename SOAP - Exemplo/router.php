<?php


$rootPath = $_SERVER['PATH_INFO'] ?? $_SERVER['PHP_SELF'];
$strPath = ltrim($rootPath, "/");
$info = explode("/", $strPath);

if ( sizeof($info) < 2 ) {
    echo file_get_contents("dictionary.md");
    die;
}

$fileClassName = array_shift($info);
$methodName = array_shift($info);
$params = $info;
$object = include $fileClassName . ".class.php";
echo json_encode( $object->$methodName(...$params) );