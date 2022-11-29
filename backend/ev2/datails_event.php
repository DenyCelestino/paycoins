<?php

require 'functions.php';
 $url=file_get_contents('php://input');
 $data=json_decode($url,true);   
 

 jsonHeader();
   
  $tk= noHacking(isset($data['tk'])?($data['tk']): encodeHash(0));
    $id= noHacking(isset($data['id'])?($data['id']): encodeHash(0));

$tk= decodeHash($tk); 
 

  echo json_encode( detailsEvent($tk,$id));
?>
  