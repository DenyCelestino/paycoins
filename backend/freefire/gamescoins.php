<?php 
include 'config.php';
include 'function.php';
$url=file_get_contents('php://input');
$data=json_decode($url,true);
jsonHeader();

$id=isset($data['id'])?$data['id']:'';



$dados = array();
$sql = "SELECT gamescoins.id, products.name,name_coins, quantity,price,gamescoins.id_games,gamescoins.banner FROM gamescoins JOIN products ON gamescoins.id_games=products.id where gamescoins.id_games='$id'";

$query = mysqli_query($connect,$sql);

if(mysqli_num_rows($query)>0){

while($gamescoins = mysqli_fetch_array($query)){

  $dados['coins'][] = array(

   "id"=>intval($gamescoins["id"]),
   "idgame"=>intval($gamescoins["id_games"]),
   "namegame"=>$gamescoins["name"],
   "namecoins"=>$gamescoins["name_coins"],
   "quantity"=>$gamescoins["quantity"],
   "price"=>$gamescoins["price"], 
   "banner"=>$gamescoins["banner"],
   
  );


}}
else{
echo json_encode('Sem tipos de giftcard');
exit();
}
echo json_encode($dados);






?>