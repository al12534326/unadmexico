<?php
session_start();
$app = $_SESSION["app"];
session_destroy();
header('Location: '.$app);