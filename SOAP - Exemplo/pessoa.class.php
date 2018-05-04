<?php

// return [
//     "soap:Envelop" => [
//         // "xmlns:soap"="http://www.w3.org/2003/05/soap-envelope/",
//         // "soap:encodingStyle"="http://www.w3.org/2003/05/soap-encoding",

//         "soap:Header" => [

//         ],
//         "soap:Body" => [
//             "soap:Fault" =>[
//                 "code" => 404,
//                 "menssage   " => "deu ruim"
//             ]
//         ]
//     ]
// ];

// $xml = new DOMDocument( "1.0", "ISO-8859-15" );
// $xml_album = new DOMElement( "Album" );
// $xml->appendChild( $xml_album );

return new class {
    private $pdo;

    function __construct() {
        $this->pdo = include "databaseHandler.class.php";
    }

    private function buscarUma($id) {
        // $sth = $this->pdo->prepare("SELECT * FROM pessoa WHERE id=:id");
        // $sth->execute([
        //     "id" => $id
        // ]);
        // $dados = $sth->fetchAll(PDO::FETCH_ASSOC);

        return [
            "soap:Envelop" => [
                "soap:Header" => [],
                "soap:Body" => [] //$dados
            ]
        ];
    }

    private function buscarVarias() {
        return [
            "soap:Envelop" => [
                "soap:Header" => [],
                "soap:Body" => [
                    "method" => __METHOD__."(". implode(",", func_get_args()) .")"
                ]
            ]
        ];
    }

    function buscar($id=null) {
        return ($id)
            ? $this->buscarUma($id)
            : $this->buscarVarias();
    }

    function inserir($dados) {
        return [
            "soap:Envelop" => [
                "soap:Header" => [],
                "soap:Body" => [
                    "method" => __METHOD__."(". implode(",", func_get_args()) .")"
                ]
            ]
        ];
    }

    function atualizar($id, $dados) {
        return [
            "soap:Envelop" => [
                "soap:Header" => [],
                "soap:Body" => [
                    "method" => __METHOD__."(". implode(",", func_get_args()) .")"
                ]
            ]
        ];
    }

    function remover($id) {
        return [
            "soap:Envelop" => [
                "soap:Header" => [],
                "soap:Body" => [
                    "method" => __METHOD__."(". implode(",", func_get_args()) .")"
                ]
            ]
        ];
    }

    function soma($a, $b, $c) {
        return $a + $b + $c;
    }
};