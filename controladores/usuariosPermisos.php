<?php 
require '../modelos/conexion.php';
require '../modelos/usuariosPermisos.php';

    switch($_GET['funcion'])
    {
        case 'usuariosPermisos': 
      
            $parametros = explode(',', $_GET['parametros']);
        

            $usuario = $parametros [0];
            
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{usuario}}"), array($usuario), $getUsuariosPermisos));  
            
			while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
			     array_push ($res, $row);
            }  
            echo json_encode($res);
			

        break;


       
    }