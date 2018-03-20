<?php 

return new class {
    function post($args) {
        echo json_encode([
            "POST" => "oieee",
            "nome" => "Daniel de Andrade Varela",
            "dataNasc" => "1986-07-07",
            "args" => $args
        ]);         
    }

    function put() {
        
    }

    function get($args) {
        echo json_encode([
            "nome" => "Daniel de Andrade Varela",
            "dataNasc" => "1986-07-07",
            "args" => $args
        ]);    
    }

    function delete() {
        
    }
};