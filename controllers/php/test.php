<?php
session_start();

$servername = 'localhost';
$username = 'root';
$password = 'admin123';
$database = 'artex';

// Crear una conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar la conexión
if($conn->connect_error){
    diel("Conexión fallida: " . $conn->connect_error);
}

$uploaddir = '../uploads/';
$uploadfile = $uploaddir . basename($_FILES['userfile']['name']);

$doc_path = realpath(dirname(__FILE__));

echo '<pre>';

$image = $_FILES['userfile']['tmp_name'];
print($uploadfile);
print($image);

if (move_uploaded_file($image, $doc_path.$uploadfile)) {
    echo "File is valid, and was successfully uploaded.\n";
} else {
    echo "Possible file upload attack!\n";
}

echo 'Here is some more debugging info:';
print_r($_FILES);

print "</pre>";

?>