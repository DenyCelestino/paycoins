<?php

require 'functions.php';
 $url=file_get_contents('php://input');
 $data=json_decode($url,true);   
 

 jsonHeader();
   
  $tk= noHacking(isset($data['tk'])?($data['tk']): encodeHash(2));
$tk= decodeHash($tk); 
 

  echo json_encode( feed($tk));
?>
  