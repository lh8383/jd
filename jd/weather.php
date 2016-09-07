 <?php

	header('Content-Type:text/html; charset=utf-8');

	$location = $_GET['location'];
	$callback = $_GET['callback'];

	$res = file_get_contents('http://api.map.baidu.com/telematics/v3/weather?location='. $location .'&output=json&ak=0A5bc3c4fb543c8f9bc54b77bc155724');

	echo $callback . '(' . $res . ')';
	
?>