<?php
session_start();
require '../modelos/conexion.php';
require '../modelos/login.php';

switch($_GET['funcion'])
{

    case 'login':


        $res= [];
        $parametros = explode(',', $_GET['parametros']);

        $user = $parametros [0];
        $pass = $parametros[1];

        $_SESSION['Vusuario'] = $user;
        $_SESSION['Vpassword'] = $pass;

        $stmt = $conn->query(str_replace( array("{{user}}","{{pass}}"), array($user, md5($pass)), $existeUsuario));

       while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){
           array_push ($res, $row);
       }
       $cadena =  ($res[0]['data']);

       if((json_decode($cadena)[0])->existe == 1){

        $_SESSION["token"] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
        $_SESSION["usuario"] = 'manuel';
        $_SESSION["idEmpresa"] = (json_decode($cadena)[0])->idEmpresa;
      //  $_SESSION["app"] = 'http://187.237.138.152:9025/' ; //http://187.237.138.152:9025/
        $_SESSION["app"] = 'http://10.34.66.82:8055/' ; //http://187.237.138.152:9025/

        echo 'true';
       }
       else 
       {
        echo 'false';
       }
    
        break;


}