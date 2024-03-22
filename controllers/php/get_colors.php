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

$g_type = $_POST['type'];

$sql = "SELECT c.id, c.name, c.hex FROM colors AS c
        INNER JOIN garment_colors AS gc ON c.id = gc.color_id and gc.garment_id = '{$g_type}'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "<option value='{$row['id']}'>{$row['name']} <i class='fa-solid fa-circle' style='color: #{$row['hex']};'></option>";
    }
}

?>