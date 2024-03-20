<?php
session_start();

$servername = 'localhost';
$username = 'root';
$password = '';
$database = 'artex';

// Crear una conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar la conexión
if($conn->connect_error){
    diel("Conexión fallida: " . $conn->connect_error);
}

$sql = "SELECT id FROM items";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $temp_id = $row['id'];
        $qty = $_POST[$temp_id];
        $conn->query("UPDATE items SET quantity = $qty WHERE id = '$temp_id'");
    }
}
header('Location: ../../view/dashboard.html');
?>