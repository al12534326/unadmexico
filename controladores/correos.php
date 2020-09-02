<?php 
require '../modelos/conexion.php';
require '../modelos/correos.php';

    switch($_GET['funcion'])
    {
        case 'listar_correos':


            $parametros = explode(',', $_GET['parametros']);
        

            $renglones = $parametros [0];
            $pagina = $parametros[1];
           
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{pagina}}","{{renglones}}"), array($pagina, $renglones), $getCorreos));
            
			while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
			     array_push ($res, $row);
            }  
            echo json_encode($res);
			

        break;

        case 'guardar_empresa' : 

            $parametros = explode(',', $_GET['parametros']);

           
            $nombre = urldecode ($parametros [0]);
            $razon = urldecode ($parametros [1]);
            $patente = urldecode ($parametros [2]);
            $categoria = $parametros [3];
            
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{nombre}}","{{razon}}","{{patente}}","{{categoria}}"), array( $nombre, $razon, $patente , $categoria), $insertarCorreo));
            
        break;

        case 'modificar_empresa' : 

            $parametros = explode(',', $_GET['parametros']);

            $id = $parametros [0];
            $nombre = urldecode ($parametros [1]);
            $razon = urldecode ($parametros [2]);
            $patente = urldecode ($parametros [3]);
            $categoria = $parametros [4];
            
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{id}}","{{nombre}}","{{razon}}","{{patente}}","{{categoria}}"), array($id, $nombre, $razon, $patente , $categoria), $modificarCorreo));
        break;

        case 'eliminar_empresa'  : 



            $parametros = explode(',', $_GET['parametros']);

            $id = $parametros [0];

            console.log('Elimnar empresa = ' . $id);
           
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{id}}"), array($id), $eliminarCorreo));

           
        break;


        
    }





