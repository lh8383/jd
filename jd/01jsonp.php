<?php 
    header('Content-Type:text/html;charset=utf-8');

    $callback = $_GET['callback'];

    $json = '{"name":"xjj","age":"10"}';

    echo $callback."('$json')";

    //echo $callback."('".$json."')";
    //echo 'fuc()';
?>