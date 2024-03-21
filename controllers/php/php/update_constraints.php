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

$sql = "SELECT id FROM garments";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $g_type = $row['id'];

        //Colors
        $conn->query("DELETE FROM garment_colors WHERE garment_id = '{$g_type}'");

        foreach($_POST["{$g_type}color"] as $value){
            $conn->query("INSERT INTO garment_colors VALUES ('{$g_type}', '{$value}')");
        }
        unset($value);

        //Sizes
        $conn->query("DELETE FROM garment_sizes WHERE garment_id = '{$g_type}'");

        foreach($_POST["{$g_type}size"] as $value){
            $price = $_POST["{$g_type}{$value}s_price"];
            if($price){
                $conn->query("INSERT INTO garment_sizes VALUES ('{$g_type}', '{$value}', $price)");
            } else {
                $conn->query("INSERT INTO garment_sizes (garment_id, size_id) VALUES ('{$g_type}', '{$value}')");
            }
        }
        unset($value);
    }
}
header('Location: ../../view/dashboard.html');
?>