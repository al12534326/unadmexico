<?php
session_start(); 
require '../modelos/conexion.php';
require '../modelos/empresas.php';

    switch($_GET['funcion'])
    {

        case 'catalogo_empresas':

            $res = [];

            $stmt = $conn->query($getCatalogoEmpresas);

            while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){
                array_push ($res, $row);
            }
            echo json_encode($res);

            break;




        case 'catalogo':

            $res = [];

            $stmt = $conn->query($getCatalogoEmpresas);

            while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){
                array_push ($res, $row);
            }
            echo json_encode($res);

            break;

        case 'listar_empresas':


            $parametros = explode(',', $_GET['parametros']);
        

            $renglones = $parametros [0];
            $pagina = $parametros[1];
           
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{pagina}}","{{renglones}}"), array($pagina, $renglones), $getEmpresas));  
            
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

            $stmt = $conn->query(str_replace( array("{{pagina}}","{{renglones}}"), array($pagina, $renglones), $getEmpresas));

            while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){
                array_push ($res, $row);
            }
            echo json_encode($res);


            break;




        case 'guardar' : 

            $parametros = explode(',', $_GET['parametros']);

            $usuario =  $_SESSION['Vusuario'];

           
            $nombre = urldecode ($parametros [0]);
            $razon = urldecode ($parametros [1]);
            $patente = urldecode ($parametros [2]);
            $categoria = $parametros [3];
            
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{nombre}}","{{razon}}","{{patente}}","{{categoria}}","{{usuario}}"), array( $nombre, $razon, $patente , $categoria, $usuario), $insertaEmpresa));  

            while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
                array_push ($res, $row);
           }  
           echo json_encode($res); 
            
        break;

        case 'modificar' : 

            $parametros = explode(',', $_GET['parametros']);

            $usuario =  $_SESSION['Vusuario'];

            $id = $parametros [0];
            $nombre = urldecode ($parametros [1]);
            $razon = urldecode ($parametros [2]);
            $patente = urldecode ($parametros [3]);
            $categoria = $parametros [4];
            
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{id}}","{{nombre}}","{{razon}}","{{patente}}","{{categoria}}","{{usuario}}"), array($id, $nombre, $razon, $patente , $categoria, $usuario), $modificaEmpresa));  

            while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
                array_push ($res, $row);
           }  
           echo json_encode($res); 

        break;

        case 'eliminar'  : 



            $parametros = explode(',', $_GET['parametros']);

            $usuario =  $_SESSION['Vusuario'];

            $id = $parametros [0];

           // console.log('Elimnar empresa = ' . $id);
           
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{id}}","{{usuario}}"), array($id, $usuario), $eliminarEmpresa));  

            while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
                array_push ($res, $row);
           }  
           echo json_encode($res); 
            

           
        break;

      
        
    }





