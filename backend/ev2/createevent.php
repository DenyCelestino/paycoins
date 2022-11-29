<?php
require 'functions.php';
/// require '../src/aws/vendor/autoload.php';
               // define("IMAGE_URL", "https://bantuc.s3.us-east-2.amazonaws.com/");
    
 $id=2;
 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    
    $httpPost = file_get_contents("php://input");
    $req = json_decode(($httpPost));
    $base= ( $req->file);
    $name=$req->titulo;// title event
     $date_s=$req->data_inicial; //date start
    $date_e=$req->data_inicial; /// date end  
    $local=$req->local; ///local
        $categoria=$req->categoria; ///local
        $custo=$req->custo; ///local

    $description=$req->descri;////Event  description 
    //decode has
    $explode_array=explode(";base64,",$base);
    $file=base64_decode ($explode_array[1]);
    $format= explode('/', $explode_array[0])[1];

    //Permissoes
    if($format=="jpeg"|| $format=="png" || $format=="jpg"){
 
        
          $path="up/".  uniqid().".".$format;
        file_put_contents($path, $file);
        $sql="INSERT INTO `events`(`nome`, `decription`, `local`, `date`, `date_s`, `date_e`, `user`, `capa`,categoria,custo) VALUES ('$name','$description','$local','$date','$date_e','$date_e','$id','$path','$categoria','$custo')";
        mysqli_query($connect, $sql);
        
        if(mysqli_affected_rows($connect)==1):
        echo    json_encode(1);
//              $s3 = new Aws\S3\S3Client([
//                                                    'region'  => 'us-east-2',
//                                                    'version' => 'latest',
//                                                    'credentials' => [
//                                                        'key'    => "AKIAUGF4N7KUBW3PID76",
//                                                        'secret' => "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",
//                                                    ]
//                                                ]);		
//                                                try
//                                                    {
//                                                        $result = $s3 -> upload ( 'bantuc' ,  $path ,  $file ,  'public-read' );
//                                                    }
//                                                catch(S3Exception $e)
//                                                    {
//                                                        echo $e;
//                                                    }
//                                                $uploaded_images = $result['ObjectURL'] . PHP_EOL;
        
        
        
      else:
                  echo    json_encode(0);

    endif;    
    }else{
    $format2= isset(explode('.', $explode_array[0])[3]);
   if($format2=='sheet'){
        $path= "img/". uniqid().".xlsx";
        file_put_contents($path, $file);
   }
   elseif ($format2=='document') {
      $path= "img/". uniqid().".docx";
        file_put_contents($path, $file);
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
}else{
    echo 'Formato nao suportdo';
}
   
   }
     
    

?>