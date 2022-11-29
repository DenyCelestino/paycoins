<?php
  header("Access-Control-Allow-Origin:*");
            header("Content-type: application/json");
            require 'functions.php';

 $url=file_get_contents('php://input');
 
 $data=json_decode($url,true);
  $id= noHacking (isset($data['tk'])?$data['tk']: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.IjYwIg.Jd4IW-4msbFlCLdZptv9FuMq8b7K_kLh7XImVj5T7qk');
  $id= decodeHash($id);

   $utilizador="SELECT *FROM utilizadores WHERE id='$id'";
   $res= mysqli_query($connect, $utilizador);
   if(mysqli_num_rows($res)>0):
      $dados= mysqli_fetch_assoc($res) ;
                      $jwt = encodeHash($dados['id']);
       echo  json_encode((array(
                            "tk"=>$jwt,
                              "email"=>$dados['email'],
                                  "avatar"=>$dados['avatar'],  
                                  "user"=>$dados['utilizador'],  
                                  "id"=>$dados['id'], 
                                  "phone"=>$dados['celular'], 
                              


                                  )));
       
   else:
    echo   json_encode("Erro");
   endif;
           
   
?>