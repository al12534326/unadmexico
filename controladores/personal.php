<?php 
session_start();
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


        case 'listar':


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


        case 'guardar' :

            $parametros = explode(',', $_GET['parametros']);

            $usuario =  $_SESSION['Vusuario'];

            $idEmpresa = urldecode ($parametros [0]);
            $apellidoPaterno = urldecode ($parametros [1]);
            $apellidoMaterno = urldecode ($parametros [2]);
            $nombre= $parametros [3];



            $res = [];

            $stmt = $conn->query(str_replace( array("{{idEmpresa}}","{{apellidoPaterno}}","{{apellidoMaterno}}","{{nombre}}","{{usuario}}"), array( $idEmpresa, $apellidoPaterno, $apellidoMaterno , $nombre, $usuario), $insertarPersonal));

            while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
                array_push ($res, $row);
           }  
           echo json_encode($res); 
           
           
            break;

        case 'modificar' :

            $parametros = explode(',', $_GET['parametros']);

            $usuario =  $_SESSION['Vusuario'];

            $id = urldecode ($parametros [0]);
            $idEmpresa = urldecode ($parametros [1]);
            $apellidoPaterno = urldecode ($parametros [2]);
            $apellidoMaterno = urldecode ($parametros [3]);
            $nombre= $parametros [4];

            $res = [];

            $stmt = $conn->query(str_replace( array("{{id}}","{{idEmpresa}}","{{apellidoPaterno}}","{{apellidoMaterno}}","{{nombre}}", "{{usuario}}"), array($id, $idEmpresa, $apellidoPaterno, $apellidoMaterno , $nombre, $usuario), $modificarPersonal));
           
            while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
                array_push ($res, $row);
           }  
           echo json_encode($res); 
           
            break;

        case 'eliminar'  :



            $parametros = explode(',', $_GET['parametros']);

            $id = $parametros [0];

            $usuario =  $_SESSION['Vusuario'];

           // console.log('Elimnar usuario = ' . $id);

            $res = [];

            $stmt = $conn->query(str_replace( array("{{id}}", "{{usuario}}"), array($id, $usuario), $eliminarPersonal));

            while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
                array_push ($res, $row);
           }  
           echo json_encode($res); 


            break;

    }