<?php
return new class {
    private $pdo;

    function __construct() {       
        $this->pdo = new PDO('mysql:host=localhost;dbname=agenda', "root", "", [PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8']);
    }

    function select() {
        $sth = $this->pdo->prepare("SELECT * FROM pessoa WHERE id = :id");
        $sth->execute(["id"=>1]);
        $result = $sth->fetchAll();
        print_r($result);
    }
};