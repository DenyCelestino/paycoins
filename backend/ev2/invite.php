<?php

require 'functions.php';
 $url=file_get_contents('php://input');
 $data=json_decode($url,true);   
 

 jsonHeader();
   $name= noHacking(isset($data['name'])?($data['name']): (1));
  $email= noHacking(isset($data['email'])?($data['email']): ('5'));
  $phone= noHacking(isset($data['phone'])?($data['phone']): (064));
  $event= noHacking(isset($data['event'])?($data['event']): (48));
 
  $tk= noHacking(isset($data['tk'])?($data['tk']): encodeHash(2));
$tk= decodeHash($tk); 
 
if(detailsEvent($tk, $event)!=0):
      echo json_encode(invite($name, $event, $email, $phone));
else:
    echo json_encode(2);
endif;
?>
   