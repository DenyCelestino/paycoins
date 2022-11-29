<?php
  header("Access-Control-Allow-Origin:*");
  header("Content-type: application/json");
  


require 'functions.php';
 $url=file_get_contents('php://input');
 $data=json_decode($url,true);

  $page=noHacking(isset($_GET['page'])?$_GET['page']:1);

  echo json_encode(feed());