<?php
require '83883900304857859505404948494038288282q/vendor/autoload.php';
require './sdkPay/vendor/autoload.php';
//require 'aws/vendor/autoload.php';
use \Firebase\JWT\JWT;

 $key='btc_mozambique_nampula_2021_fuller';


  //Conecting database
$date=date('Y-m-d H:i:s');
$servername = "localhost";
$username = "root";
$password = "";
$db_name = "evento";

$connect = mysqli_connect($servername, $username, $password, $db_name);
if(mysqli_connect_error()):
	 "Erro na conexão: ".mysqli_connect_error();
endif;

function jsonHeader(){
  header("Access-Control-Allow-Origin:*");
  header("Content-type: application/json");
}

function Login($user,$senha){
        global $connect;
    $key='btc_mozambique_nampula_2021_fuller';

    $sql = "SELECT *FROM utilizadores WHERE email='$user'";
    $resultado = mysqli_query($connect, $sql);


			if(mysqli_num_rows($resultado) == 1):
				$dados = mysqli_fetch_array($resultado);
				mysqli_close($connect);
                                if(password_verify($senha, $dados['senha'])):
                   $jwt = encodeHash($dados['id']);
                                
                   return   (array(
                            "tk"=>$jwt,
                              "email"=>$dados['email'],
                                  "avatar"=>$dados['avatar'],  
                                  "user"=>$dados['utilizador'],  
                                  "url"=>$dados['url'],  
                                  "id"=>$dados['id'], 
                                  "phone"=>$dados['celular'], 
                     


                                  ));
                                
                                else:
                             return   ('Error1');

                                endif;
                                
                                
			else:
                            return   ('Error2');
			endif;

    
}


         
                 

    function decodeHash($hash){
                     global $key;
                     return JWT::decode($hash, $key, array('HS256'));
                 } 
                 
              function encodeHash($value){
                     global $key;
                     return  $jwt = JWT::encode($value, $key);
                 }        
                 

//Cancel atack hacking
function noHacking($input){
    global $connect;
     $var= mysqli_escape_string($connect, $input);
      $var= htmlspecialchars($var);
    return $var;
}
//Label title
function labelTitle($value){
    return $value;
}

function chekMail($user){
    global $connect;
    $sql="SELECT id FROM `utilizadores` WHERE email ='$user' or id='$user'";
    $query= mysqli_query($connect, $sql);
    if(mysqli_num_rows($query)==1):
            $data= mysqli_fetch_assoc($query);

        return $data['id'];
    else:
        return 0;
    endif;
}




function feed($id){
    global $connect;
    $sql="SELECT * FROM `events` where user =$id order by date desc";
$res= mysqli_query($connect, $sql);
$j=[];
$i=0;
if(mysqli_num_rows($res)>0):
    while ($dados= mysqli_fetch_assoc($res)):
       $j[$i]=["nome"=>$dados['nome'],"decription"=>$dados['decription'],"locl"=>$dados['local'],"dataInicio"=>$dados['date_s'],"capa"=>$dados['capa'],"custo"=>$dados['custo'],"categoria"=>$dados['categoria'],
           
           "dataFim"=>$dados['date_e'],"id"=>$dados['id']];
$i++;
    endwhile;
return $j;
endif;
   
    
    
}

function detailsEvent($id,$idEvent){
    global $connect;
    $sql="SELECT * FROM `events` where user =$id and id='$idEvent'";
$res= mysqli_query($connect, $sql);

if(mysqli_num_rows($res)==1):
    while ($dados= mysqli_fetch_assoc($res)):
return $dados;
    endwhile;
else:
    return 0;
endif;  
}




function invite($name,$event,$email,$phone){
        global $connect,$date;
    $sql="SELECT * FROM `participantes` WHERE nome='$name'and (email='$email' or celular='$phone') and evento='$event'";
$res= mysqli_query($connect, $sql);

if(mysqli_num_rows($res)==1):
    return 0;
else:
  $sql="INSERT INTO `participantes` ( `evento`, `nome`, `email`, `celular`, `date`) VALUES ( '$event', '$name', '$email', '$phone', '$date')";
$res= mysqli_query($connect, $sql);
if(mysqli_affected_rows($connect)==1):
    return 1;
else:
    return 0;
endif;
    
    endif;
}

function list_participants($id){
    global $connect;
    $sql="SELECT * FROM `participantes` where evento ='$id' order by date desc";
$res= mysqli_query($connect, $sql);
$j=[];
$i=0;
if(mysqli_num_rows($res)>0):
    while ($dados= mysqli_fetch_assoc($res)):
       $j[$i]=["nome"=>$dados['nome'],"email"=>$dados['email'],"celular"=>$dados['celular']];
$i++;
    endwhile;
return $j;
endif;
}

function getPay($event,$user){
    global $connect;
    $query="SELECT * FROM `tickets`  Where event='$event' and user_pipocar='$user'";
  $res=  mysqli_query($connect,$query);
    if(mysqli_num_rows($res)==1):
    return true;
    else:
        return false;

    endif;
    }

function payment($event,$method,$user,$price_pay){
global $connect, $data;
 $query="INSERT INTO `tickets`( `event`, `user_pipocar`, `date`, `price_pay`, `method_pay`) VALUES ('$event','$user','$data','$price_pay','$method')";
mysqli_query($connect,$query);
if(mysqli_affected_rows($connect)==1):
return 200;
else:
    return false;

endif;

}


function getWayPay($number,$amount){
    $mpesa = new \Karson\MpesaPhpSdk\Mpesa();
    $prefixNumber=258;
    $mpesa->setApiKey('qazsundm8jyqcupwjntf88lnc28qepce');
    $mpesa->setPublicKey("MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAyrOP7fgXIJgJyp6nP/Vtlu8kW94Qu+gJjfMaTNOSd/mQJChqXiMWsZPH8uOoZGeR/9m7Y8vAU83D96usXUaKoDYiVmxoMBkfmw8DJAtHHt/8LWDdoAS/kpXyZJ5dt19Pv+rTApcjg7AoGczT+yIU7xp4Ku23EqQz70V5Rud+Qgerf6So28Pt3qZ9hxgUA6lgF7OjoYOIAKPqg07pHp2eOp4P6oQW8oXsS+cQkaPVo3nM1f+fctFGQtgLJ0y5VG61ZiWWWFMOjYFkBSbNOyJpQVcMKPcfdDRKq+9r5DFLtFGztPYIAovBm3a1Q6XYDkGYZWtnD8mDJxgEiHWCzog0wZqJtfNREnLf1g2ZOanTDcrEFzsnP2MQwIatV8M6q/fYrh5WejlNm4ujnKUVbnPMYH0wcbXQifSDhg2jcnRLHh9CF9iabkxAzjbYkaG1qa4zG+bCidLCRe0cEQvt0+/lQ40yESvpWF60omTy1dLSd10gl2//0v4IMjLMn9tgxhPp9c+C2Aw7x2Yjx3GquSYhU6IL41lrURwDuCQpg3F30QwIHgy1D8xIfQzno3XywiiUvoq4YfCkN9WiyKz0btD6ZX02RRK6DrXTFefeKjWf0RHREHlfwkhesZ4X168Lxe9iCWjP2d0xUB+lr10835ZUpYYIr4Gon9NTjkoOGwFyS5ECAwEAAQ==");
     $id=900865;
     $reference_id =substr($id . bin2hex(random_bytes(5)), 0, 10);
    $number=$prefixNumber.$number;
    $amount=0.1;
 
 ///setEnv('test') if you
 
    $mpesa->setEnv('live');
 
     $state=$mpesa->c2b("T1234462", $number, $amount, $reference_id,$id);


return json_decode(json_encode($state),true);


}



