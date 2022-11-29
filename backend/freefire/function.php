<?php 
include 'vendor\autoload.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;



$key = "deny_celestino_844505131_kajdbksjdkasbdaksdjakdskj";

function datenow(){
  return date('Y-m-d H:i:s');
}

function jsonHeader(){
  header("Access-Control-Allow-Origin:*");
  header("Content-type: application/json");
}

function encodeHash($hash){
  global $key;
  return JWT::encode($hash, $key, 'HS256');
}


function decodeHash($value){
global $key;
return JWT::decode($value, new Key($key, 'HS256'));
}
?>