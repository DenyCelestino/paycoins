<?php
  header("Access-Control-Allow-Origin:*");
  header("Content-type: application/json");
  


require 'functions.php';
 $url=file_get_contents('php://input');
 $data=json_decode($url,true);
   $email= noHacking( isset($data['email'])?$data['email']:'tyga@gmail.com');
  $senha= noHacking (isset($data['password'])?$data['password']:'lulaboy1');
  if(!empty($email) or !empty($senha)):
      echo json_encode(Login($email, $senha));
   else:   
      echo json_encode('Error3');
  endif;