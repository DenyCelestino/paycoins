<?php 

include 'config.php';


$dados = array();

$sql = 'SELECT * FROM `notice` order by date_post DESC';

$query = mysqli_query($connect,$sql);

if(mysqli_num_rows($query)>0){

while($row = mysqli_fetch_array($query)){

   $dados['notice'][] = array(

      "id"=>intval($row["id"]),
      "title"=>$row["title"],
      "description"=>$row["description"],
      "banner"=>$row["banner"],
      "gender"=>$row["gender"],
      "date_post"=>$row["date_post"],
      
      


   );


}
  
}else{
  echo json_encode('no');
}
echo json_encode($dados);



?>