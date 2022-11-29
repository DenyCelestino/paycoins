<?php 
include 'config.php';
include 'function.php';  
$url=file_get_contents('php://input');
$data=json_decode($url,true);
jsonHeader();

$email = isset($data['mail']) ? $data['mail'] : '';
$password = encodeHash(isset($data['pass']) ? $data['pass'] : '');
$dados = array();
if(!empty($email) or !empty($password)){

$sql = "SELECT * FROM users WHERE email='$email' and password='$password'";
$query = mysqli_query($connect,$sql);

if(mysqli_num_rows($query)>0){

while($user = mysqli_fetch_array($query)){

  $dados['user'] = array(
    "tk" => encodeHash($user['avatar']."id:".intval($user['id']).$user['email']),
    "name" => $user['name'],
    "email" => $user['email'],
    "avatar" => $user['avatar'],
   
  );
  echo json_encode($dados);
}

}else{
  echo json_encode('no');
}


}else{

echo json_encode('emptyfields');

}



?>