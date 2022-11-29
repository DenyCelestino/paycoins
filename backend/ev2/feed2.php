<?php
  header("Access-Control-Allow-Origin:*");
  header("Content-type: application/json");
require 'functions.php';
 $url=file_get_contents('php://input');
 $data=json_decode($url,true);   
   
   
   
 $tk= noHacking(isset($data['tk'])?($data['tk']):0);
 // $tk= decodeHash($tk); 
   $pagina = noHacking(isset($_GET['pagina'])?$_GET['pagina']:1);


$result_curso = "SELECT * FROM `events`";
$resultado_curso = mysqli_query($connect, $result_curso);

//Contar o total de cursos
$total_cursos = mysqli_num_rows($resultado_curso);
$totalPage=$total_cursos;

//Seta a quantidade de cursos por pagina
$quantidade_pg = 10;

//calcular o número de pagina necessárias para apresentar os cursos
$num_pagina = ceil($total_cursos/$quantidade_pg);

//Calcular o inicio da visualizacao
$incio = ($quantidade_pg*$pagina)-$quantidade_pg;

//Selecionar os cursos a serem apresentado na página

$result_cursos = "SELECT events.id,utilizador,date,avatar,nome,capa,decription,aspectRatio,local,date_e,date_s,categoria,custo FROM `events` join utilizadores on utilizadores.id=events.user ORDER by date DESC limit $incio, $quantidade_pg";

$resultado_cursos = mysqli_query($connect, $result_cursos);
 $total_cursos = mysqli_num_rows($resultado_cursos);

 $i=0;
 $j=[];
 
 
while ($data= mysqli_fetch_assoc($resultado_cursos)):
    
   $j[$i]=['id'=>$data['id'],
     'user'=>$data['utilizador'],
       'title'=>$data['nome'] , 
       'startingTime'=>$data['date_s'],
       'date_end'=>$data['date_e'],
      'avatar'=>$data['avatar'],
       'image'=>$data['capa'] , 
       'description'=>$data['decription'],
        'aspectRatio'=>$data['aspectRatio'],
       'local'=>$data['local'],
            'price'=>$data['custo'],
     'type'=>$data['categoria'],
   ];

$i++;
endwhile;
echo json_encode (array('length'=>$totalPage,'items'=>$j));
mysqli_close($connect);