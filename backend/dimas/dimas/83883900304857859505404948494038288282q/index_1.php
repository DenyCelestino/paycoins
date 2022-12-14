<?php

require_once 'vendor/autoload.php';
use \Firebase\JWT\JWT;

$key = "example_key";
$payload = array(
    "iss" => "http://example.org",
    "aud" => "http://example.com",
    "iat" => 1356999524,
    "nbf" => 1357000000
);


$jwt = JWT::encode($payload, $key);
$decoded = JWT::decode($jwt, $key, array('HS256'));

print_r($decoded);

$decoded_array = (array) $decoded;

JWT::$leeway = 60; // $leeway in seconds
$decoded = JWT::decode($jwt, $key, array('HS256'));

?>