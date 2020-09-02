<?php 
session_start();

//include '../../../controladores/seguridad.php'; 
require '../modelos/conexion.php';
require '../modelos/usuariosPermisos.php';

    switch($_GET['funcion'])
    {
        case 'usuariosPermisos': 
      
           // $parametros = explode(',', $_GET['parametros']);
        

            //$usuario = $parametros [0];

            if (isset($_SESSION["Vusuario"])){
                $usuario = $_SESSION['Vusuario'];
            }else{
                $usuario = $_SESSION['Vusuario'] = "admin";
            }

                     
          //  dd($usuario);
            
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{usuario}}"), array($usuario), $getUsuariosPermisos));  
            
			while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
			     array_push ($res, $row);
            }  
            echo json_encode($res);
			

        break;


       
    }