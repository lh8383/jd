<?php
    header('Content-Type:text/html;charset=utf-8');
    $name = 'xgg';
    $user = '{"name":"xgg","age":"10"}';

    $fnName = $_GET['callback'];

    //echo 'test("'.$user.'")';
    //echo "test('$user')";/*""当中的$会解析成变量*/
    echo $fnName."('".$user."')";
?>