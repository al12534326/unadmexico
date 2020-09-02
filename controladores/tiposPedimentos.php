<?php 
require '../modelos/conexion.php';
require '../modelos/tiposPedimentos.php';

    switch($_GET['funcion'])
    {
        case 'catalogo':
         
            $res = [];
           
            $stmt = $conn->query($getCatalogoTiposPedimentos);
            
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
           
            $stmt = $conn->query(str_replace( array("{{pagina}}","{{renglones}}"), array($pagina, $renglones), $getTiposPedimentos));
            
			while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
			     array_push ($res, $row);
            }  
            echo json_encode($res);
            
        break;

        case 'insertar':

            $parametros = explode(',', $_GET['parametros']);

           
            $nombre = urldecode ($parametros [0]);
                        
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{nombre}}"), array( $nombre), $insertarTiposPedimentos));
            
        break;


        case 'modificar':
            
             $parametros = explode(',', $_GET['parametros']);

            $id = $parametros [0];
            $nombre = urldecode ($parametros [1]);
            
            
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{id}}","{{nombre}}"), array($id, $nombre), $modificarTiposPedimentos));


            
        break;

        case 'eliminar':

             $parametros = explode(',', $_GET['parametros']);

            $id = $parametros [0];

            console.log('Elimnar categoria = ' . $id);
           
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{id}}"), array($id), $eliminarTiposPedimentos));
            
        break;


        
    }