<?php
require '83883900304857859505404948494038288282q/vendor/autoload.php';
use \Firebase\JWT\JWT;

  session_start();
$datacompleta=date('Y-m-d H:i:s');
$servername = "localhost";
$username = "root";
$password = "";
$db_name = "w";


//KeyApi
    $key='btc_mozambique_nampula_fuller7e7e777388383883838838838_yjsjksks_jsysstsg';


$connect = mysqli_connect($servername, $username, $password, $db_name);
mysqli_set_charset($connect, "utf8");

if(mysqli_connect_error()):
	 "Erro na conexão: ".mysqli_connect_error();
endif;


function jsonHeader(){
    header("Access-Control-Allow-Origin:*");
    header("Content-type: application/json");
  }
  
  

  //Evitando sql Inject
function noHacking($input){
    global $connect;
     $var= mysqli_escape_string($connect, $input);
      $var= htmlspecialchars($var);
    return $var;
}




function createUser($name,$email,$password,$phone){
    global $connect,$date;

 if( chekUser($phone, $email)==0){

        $sql="INSERT INTO `utilizadores` (`utilizador`, `email`, `senha`, `data_`,celular) VALUES ('$name', '$email', '$password', '$date','$phone')";
        mysqli_query($connect,$sql);
        if(mysqli_affected_rows($connect)==1){
            return true;
    }else{
            return false;
        }
 }else{
     return 'exist';
 }
    }
    

function Login($user,$senha){
        global $connect;
        global $key;

    $sql = "SELECT *FROM utilizadores WHERE email='$user'";
    $resultado = mysqli_query($connect, $sql);

    
    
			if(mysqli_num_rows($resultado) == 1):
				$dados = mysqli_fetch_array($resultado);
				mysqli_close($connect);
                                if(password_verify($senha, $dados['senha'])):
                          $_SESSION['logado'] = true;
			  $sesao=$_SESSION['id_usuario'] = $dados['id'];
                   $jwt = JWT::encode($sesao, $key);
                   return    (array(
                            "tk"=>$jwt,
                              "email"=>$dados['email'],
                                  "avatar"=>$dados['avatar'],  
                                  "user"=>$dados['utilizador'],  
                                  "celular"=>$dados['celular'],    
                                       "id"=>$dados['id'], 
                                  ));
                                
                                else:
                             return   ('Erro1');

                                endif;
                                
                                
			else:
                            return   ('Erro2');
			endif;}
         
                    

    function decodeHash($hash){
                     global $key;
                     return JWT::decode($hash, $key, array('HS256'));
                 } 
                 
              function encodeHash($value){
                     global $key;
                     return  $jwt = JWT::encode($value, $key);
                 }        
                 
            

function chekUser($phone,$email){
    global $connect;
     $sql="SELECT id FROM `utilizadores` WHERE email ='$email'";
    $query= mysqli_query($connect, $sql);
    if(mysqli_num_rows($query)==1):
            $data= mysqli_fetch_assoc($query);

        return $data['id'];
    else:
        return 0;
    endif;
}



function changePassword($id,$password){
    global $connect, $date;
      $sql="SELECT senha FROM `utilizadores` Where id='$id'";
      $res=mysqli_query($connect,$sql);
      $dados=mysqli_fetch_assoc($res);
      $dados['senha'];
    $password=password_hash($password,PASSWORD_DEFAULT);// cryptog
        $sql="UPDATE set utilizadores senha='$password', updateDate='$date' WHERE id='$id' ";
        mysqli_query($connect,$sql);
    if(mysqli_affected_rows($connect)==1){
        return true;
    }else{
        return true;
    }
}    
function feed(){
    global $connect;
 $sql="SELECT *  FROM `products` JOIN productsprice on productsprice.product=products.id";
 $res=mysqli_query($connect,$sql);
$i=0;
$j=[];
 while($data=mysqli_fetch_assoc($res)):

    $j[$i]=["id"=>$data['id'], "game"=>$data['name'],"banner"=>$data['banner'],"description"=>$data['description'],"price"=>priceGame($data['id'])];
$i++;
 endwhile;
 return $j;
}


function priceGame($game){

    global $connect;
   $sql="SELECT *  FROM  productsprice where product='$game'";
 $res=mysqli_query($connect,$sql);
$i=0;
$j=[];
 while($data=mysqli_fetch_assoc($res)):
    $j[$i]=["id"=>$data['id'], "name"=>$data['name'],'price'=>$data['price'],"quanty"=>$data['quanty']];
 
$i++;


endwhile;
 return $j;




}

?>

