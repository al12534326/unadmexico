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

        case 'guardar' : 

            $parametros = explode(',', $_GET['parametros']);

           
            $idEmpresa = urldecode ($parametros [0]);
            $correo = urldecode ($parametros [1]);
                       
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{idEmpresa}}","{{correo}}"), array( $idEmpresa, $correo), $insertarCorreo));
            
        break;

        case 'modificar' : 

            $parametros = explode(',', $_GET['parametros']);

            $id = $parametros [0];
            $idEmpresa = urldecode ($parametros [1]);
            $correo = urldecode ($parametros [2]);
            
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{id}}","{{idEmpresa}}","{{correo}}"), array($id, $idEmpresa, $correo), $modificarCorreo));
        break;

        case 'eliminar'  : 



            $parametros = explode(',', $_GET['parametros']);

            $id = $parametros [0];

            console.log('Elimnar empresa = ' . $id);
           
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{id}}"), array($id), $eliminarCorreo));

           
        break;


        
    }





