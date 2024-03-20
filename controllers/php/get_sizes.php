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

$g_type = $_POST['type'];

$sql = "SELECT s.id, s.name FROM sizes AS s
        INNER JOIN garment_sizes AS gs ON s.id = gs.size_id and gs.garment_id = '{$g_type}'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "<option value='{$row['id']}'>{$row['name']}</option>";
    }
}

?>