<?php 

include 'config.php';


$sql = "SELECT * FROM products where product_type = 'giftcard'";
$dados = array();
$query = mysqli_query($connect,$sql);

if(mysqli_num_rows($query)>0){

  while($products = mysqli_fetch_array($query)){
    
    $dados['gifcard'][] =array(
     
      "id"=>intval($products["id"]),
      "name"=>$products["name"],
      "banner"=>$products["banner"],
      "description_products"=>$products["descriptionproducts"], 
      "gender"=>$products["gender"],
      "product_type"=>$products["product_type"],
     

    );


  }

}else{
  echo 'no';
  exit();
}
echo json_encode($dados);


?>