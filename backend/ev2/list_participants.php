<?php

require 'functions.php';
 $url=file_get_contents('php://input');
 $data=json_decode($url,true);   
 

 jsonHeader();
  $event= noHacking(isset($data['event'])?($data['event']): (45));
 
  $tk= noHacking(isset($data['tk'])?($data['tk']): encodeHash(2));
$tk= decodeHash($tk); 
 
if(detailsEvent($tk, $event)!=0):
      echo json_encode(list_participants($event));
else:
    echo json_encode(0);
endif;
?>
   