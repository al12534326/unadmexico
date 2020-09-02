<?php session_start();

if (!isset($_SESSION["token"])){
  //  header('Location: http://187.237.138.152:9025/vistas/modulos/errorPage/falloAutenticacion.php');
    header('Location: http://10.34.66.82:8055/vistas/modulos/errorPage/falloAutenticacion.php');

}