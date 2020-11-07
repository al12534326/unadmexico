<?php 

session_start();
require '../modelos/conexion.php';
require '../modelos/remesas.php';

    switch($_GET['funcion'])
    {
        case 'listar':

           $idEmpresa = $_SESSION["idEmpresa"];

            $parametros = explode(',', $_GET['parametros']);
        
            $renglones = $parametros [0];
            $pagina = $parametros[1];
           
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{pagina}}","{{renglones}}","{{idEmpresa}}"), array($pagina, $renglones, $idEmpresa), $getRemesas));
            
			while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
			     array_push ($res, $row);
            }  
            echo json_encode($res);
			

        break;

        case 'guardar' :

            $parametros = explode(',', $_GET['parametros']);


            $idPedimento = urldecode ($parametros [0]);
            $noRemesa = urldecode ($parametros [1]);
            $noOficio = urldecode ($parametros [2]);
            $descripcion = $parametros [3];
            $cantidad = $parametros [4];

            $error = '0';

            if (empty($noOficio) || empty($descripcion) || empty($cantidad) ){
                $error = 'Todos los campos son obligatorios';
             }

            if(strlen($noOficio) > 35 || strlen($descripcion) > 35 ) {
                $error = 'El Tamaño del campo es mayor de 35';
             }

            if (preg_match('/^[a-zA-Z _-]{5,35}/', $noOficio)) {
              
            }else{
                $error = 'El nombre del personal es invalido se permiten letras espacios numeros y el guion';
            }
            if (preg_match('/^[a-zA-Z _-]{5,35}/', $descripcion)) {
              
            }else{
                $error = 'El nombre del personal es invalido se permiten letras espacios numeros y el guion';
            }
            

            if ($error == '0'){

            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{idPedimento}}","{{noRemesa}}","{{noOficio}}","{{descripcion}}", "{{cantidad}}"), array( $idPedimento, $noRemesa, $noOficio , $descripcion,  $cantidad ), $insertarRemesa));
            
            while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
                array_push ($res, $row);
           }  
           echo json_encode($res); 
        }else{

            $res = [];

            $r = array();
                               
            $r['error'] = 'true';
            $r['data'] = $error;

            array_push ($res, $r);
                                    
           echo json_encode($res); 
}
        
       
       
            break;

        case 'modificar' :

            $parametros = explode(',', $_GET['parametros']);

            $id = urldecode ($parametros [0]);
            $idPedimento = urldecode ($parametros [1]);
            $noRemesa = urldecode ($parametros [2]);
            $noOficio = urldecode ($parametros [3]);
            $descripcion = $parametros [4];
            $cantidad = $parametros [5];

            $error = '0';

            if (empty($noOficio) || empty($descripcion) || empty($cantidad) ){
                $error = 'Todos los campos son obligatorios';
             }

            if(strlen($noOficio) > 35 || strlen($descripcion) > 35 ) {
                $error = 'El Tamaño del campo es mayor de 35';
             }

            if (preg_match('/^[a-zA-Z _-]{5,35}/', $noOficio)) {
              
            }else{
                $error = 'El nombre del personal es invalido se permiten letras espacios numeros y el guion';
            }
            if (preg_match('/^[a-zA-Z _-]{5,35}/', $descripcion)) {
              
            }else{
                $error = 'El nombre del personal es invalido se permiten letras espacios numeros y el guion';
            }
            

            if ($error == '0'){


            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{id}}","{{idPedimento}}","{{noRemesa}}","{{noOficio}}","{{descripcion}}", "{{cantidad}}"), array($id, $idPedimento, $noRemesa, $noOficio , $descripcion, $cantidad ), $modificarRemesa));
       
            while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
                array_push ($res, $row);
           }  
           echo json_encode($res); 
        }else{

            $res = [];

            $r = array();
                               
            $r['error'] = 'true';
            $r['data'] = $error;

            array_push ($res, $r);
                                    
           echo json_encode($res); 
}
        
        
       
       
            break;

        case 'eliminar'  :



            $parametros = explode(',', $_GET['parametros']);

            $id = $parametros [0];

           // console.log('Elimnar usuario = ' . $id);
           
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{id}}"), array($id), $eliminarRemesa));

            while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
                array_push ($res, $row);
           }  
           echo json_encode($res); 

           
        break;


        
    }





