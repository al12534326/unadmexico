<?php 
require '../modelos/conexion.php';
require '../modelos/personal.php';

    switch($_GET['funcion'])
    {
        case 'catalogo_personal': 

          
            $res = [];
           
            $stmt = $conn->query($getCatalogoPersonal);  
            
			while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
			     array_push ($res, $row);
            }  
            echo json_encode($res);
			

        break;


        case 'listar_personal':


            $parametros = explode(',', $_GET['parametros']);


            $renglones = $parametros [0];
            $pagina = $parametros[1];

            $res = [];

            $stmt = $conn->query(str_replace( array("{{pagina}}","{{renglones}}"), array($pagina, $renglones), $getPersonal));

            while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){
                array_push ($res, $row);
            }
            echo json_encode($res);


            break;


        case 'guardar_personal' :

            $parametros = explode(',', $_GET['parametros']);

            $idEmpresa = urldecode ($parametros [0]);
            $apellidoPaterno = urldecode ($parametros [1]);
            $apellidoMaterno = urldecode ($parametros [2]);
            $nombre= $parametros [3];



            $res = [];

            $stmt = $conn->query(str_replace( array("{{idEmpresa}}","{{apellidoPaterno}}","{{apellidoMaterno}}","{{nombre}}"), array( $idEmpresa, $apellidoPaterno, $apellidoMaterno , $nombre), $insertarPersonal));

            break;

        case 'modificar_personal' :

            $parametros = explode(',', $_GET['parametros']);

            $id = urldecode ($parametros [0]);
            $idEmpresa = urldecode ($parametros [0]);
            $apellidoPaterno = urldecode ($parametros [1]);
            $apellidoMaterno = urldecode ($parametros [2]);
            $nombre= $parametros [3];

            $res = [];

            $stmt = $conn->query(str_replace( array("{{id}}","{{idEmpresa}}","{{apellidoPaterno}}","{{apellidoMaterno}}","{{nombre}}"), array($id, $idEmpresa, $apellidoPaterno, $apellidoMaterno , $nombre), $modificarPersonal));
            break;

        case 'eliminar_personal'  :



            $parametros = explode(',', $_GET['parametros']);

            $id = $parametros [0];

            console.log('Elimnar usuario = ' . $id);

            $res = [];

            $stmt = $conn->query(str_replace( array("{{id}}"), array($id), $eliminarPersonal));


            break;

    }