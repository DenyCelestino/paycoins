<?php
require 'functions.php';
 $url=file_get_contents('php://input');
 $data=json_decode($url,true);   

 jsonHeader();
  $event= noHacking(isset($data['event'])?($data['event']): (0));
 $price= noHacking(isset($data['price'])?($data['price']): (0));
  $tk= noHacking(isset($data['tk'])?($data['tk']): encodeHash(0));
  $number= noHacking(isset($data['number'])?($data['number']): (0));

$user= decodeHash($tk); 
if(getPay($event,$user)==1){
  echo json_encode('exist');
}else{
$pay=getWayPay($number,$price);
if($pay['status']==201 or $pay['status']==200){
  echo json_encode(payment($event,'M-Pesa',$user,$price));
}else{
 echo json_encode($pay); 

}
}
?>
   