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

$g_type = $_POST['garment'];
$color = $_POST['color'];
$size = $_POST['size'];
$qty = $_POST['quantity'];

$conn->query("INSERT INTO items VALUES ('{$g_type}{$size}{$color}', '{$g_type}', '{$size}', '{$color}', {$qty})");

header('Location: ../../view/dashboard.html');
?>