<?php 
include 'config.php';  
include 'function.php';  
$url=file_get_contents('php://input');
$data=json_decode($url,true);
jsonHeader();
$date=datenow();

$name = isset($data['name']) ? $data['name'] : '';
$email = isset($data['mail']) ? $data['mail'] : '';
$password = encodeHash(isset($data['pass']) ? $data['pass'] : '');


$sql="SELECT * FROM users where email='$email'";
$query=mysqli_query($connect,$sql);

if(mysqli_num_rows($query)>0){
  echo json_encode('exist');
}else{
$sql="INSERT INTO `users` (`name`, `email`, `password`, `date_created`) VALUES ('$name', '$email', '$password', '$date')";
mysqli_query($connect,$sql);
 if(mysqli_affected_rows($connect)==1){
  echo json_encode('created');
}else{
  echo json_encode('error');
}
}


?>