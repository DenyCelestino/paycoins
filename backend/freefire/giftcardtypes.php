<?php 
include 'config.php';
include 'function.php';
$url=file_get_contents('php://input');
$data=json_decode($url,true);
jsonHeader();

$id=isset($data['id'])?$data['id']:'';



$dados = array();
$sql = "SELECT giftcard.id, products.name , products.descriptionproducts, products.banner, products.gender, products.product_type, giftcard.price, giftcard.descriptiongiftcard, giftcard.banner,giftcard.id_gift as giftid from products join giftcard on products.id = giftcard.id_gift where giftcard.id_gift = '$id'";

$query = mysqli_query($connect,$sql);

if(mysqli_num_rows($query)>0){

while($giftcard = mysqli_fetch_array($query)){

  $dados['gifttypes'][] = array(

   "id"=>intval($giftcard["id"]),
   "idgift"=>intval($giftcard["giftid"]),
   "name"=>$giftcard["name"],
   "description_products"=>$giftcard["descriptionproducts"], 
   "banner"=>$giftcard["banner"],
   "gender"=>$giftcard["gender"],
   "product_type"=>$giftcard["product_type"],
   "description_giftcard"=>$giftcard["descriptiongiftcard"],
   "price"=>$giftcard["price"],
   "banner"=>$giftcard["banner"],




  );


}}
else{
echo json_encode('Sem tipos de giftcard');
exit();
}
echo json_encode($dados);






?>