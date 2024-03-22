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

$file = $_POST['img_file'];
$name = $_POST['name'];
$size = $_POST['size'];
$price = $_POST['price'];
$tags = $_POST['tags'];

$conn->query("INSERT INTO embroideries (name, size, price, tags, file_n) VALUES ('{$name}', {$size}, {$price}, '{$tags}', '{$file}')");

header('Location: ../../view/dashboard.html');
?>