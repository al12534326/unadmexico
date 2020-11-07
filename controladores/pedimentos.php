<?php 
session_start();

require '../modelos/conexion.php';
require '../modelos/pedimentos.php';

    switch($_GET['funcion'])
    {


        case 'catalogoPedimentoXEmpresa':

        $idEmpresa = $_SESSION["idEmpresa"];

       // dd( $idEmpresa);


        $res = [];

        $stmt = $conn->query(str_replace( array("{{idEmpresa}}"), array($idEmpresa), $getCatalogoPedimentosxEmpresa));

        while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){
            array_push ($res, $row);
        }
        echo json_encode($res);


        break;


        case 'catalogo':


            $res = [];

            $stmt = $conn->query($getCatalogoPedimentos);

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
           
            $stmt = $conn->query(str_replace( array("{{pagina}}","{{renglones}}"), array($pagina, $renglones), $getPedimentos));
            
			while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
			     array_push ($res, $row);
            }  
            echo json_encode($res);
			

        break;

        case 'guardar' :

            $parametros = explode(',', $_GET['parametros']);

            $usuario =  $_SESSION['Vusuario'];


            $pedimento = urldecode ($parametros [0]);
            $idProducto = urldecode ($parametros [1]);
            $idEmpresa = urldecode ($parametros [2]);
            $idTipoPedimento = $parametros [3];

            $error = '0';

            if (empty($pedimento) ){
              $error = 'El Campo categoria no puede estar vacio';
            }


            if(strlen($pedimento) > 35) {
               $error = 'El Tamaño del campo es mayor de 35';
            }

            if (preg_match('/([0-9])/', $pedimento)) {
              
            }else{
                $error = 'El nombre del pedimento es invalido se permiten letras espacios numeros y el guion';
            }


            if ($error == '0'){


            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{noPedimento}}","{{idProducto}}","{{idEmpresa}}","{{idTipoPedimento}}","{{usuario}}"), array( $pedimento, $idProducto, $idEmpresa , $idTipoPedimento, $usuario ), $insertarPedimento));
            
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

            $usuario =  $_SESSION['Vusuario'];

            $id = urldecode ($parametros [0]);
            $pedimento = urldecode ($parametros [1]);
            $idProducto = urldecode ($parametros [2]);
            $idEmpresa = urldecode ($parametros [3]);
            $idTipoPedimento = $parametros [4];

            $error = '0';

            if (empty($pedimento) ){
              $error = 'El Campo categoria no puede estar vacio';
            }


            if(strlen($pedimento) > 35) {
               $error = 'El Tamaño del campo es mayor de 35';
            }

            if (preg_match('/([0-9][^$*#%&()=?"!]{2,35})/', $pedimento)) {
              
            }else{
                $error = 'El nombre del pedimento es invalido se permiten letras espacios numeros y el guion';
            }


            if ($error == '0'){


            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{id}}","{{noPedimento}}","{{idProducto}}","{{idEmpresa}}","{{idTipoPedimento}}","{{usuario}}"), array($id, $pedimento, $idProducto, $idEmpresa , $idTipoPedimento, $usuario), $modificarPedimento));
        
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

            $usuario =  $_SESSION['Vusuario'];

            $id = $parametros [0];

           // console.log('Elimnar usuario = ' . $id);
           
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{id}}","{{usuario}}"), array($id, $usuario), $eliminarPedimento));

            while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
                array_push ($res, $row);
           }  
           echo json_encode($res); 

           
        break;


        
    }





