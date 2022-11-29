<?php 
include 'vendor\autoload.php';
include 'function.php';
include 'config.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$token ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.ImZyZWVmaXJlL2ltYWdlcy9wcm9maWxlLmpwZ2lkOjhkZW55Y2VsZXN0aW5vMjFAZ21haWwuY29tIg.oLnsBkXLOFwco2ueU-QcN3yea32424MCIoTImQCwJ74";
$data = array();

$decodedtoken = decodeHash($token);
$explode = explode("id:",$decodedtoken);
$iduser = $explode[1][0];
print_r($iduser);

?>