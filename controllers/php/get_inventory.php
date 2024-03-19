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

$sql = "SELECT i.id, g.name as garment, c.name as color, s.name as sizee, i.quantity FROM items AS i
    INNER JOIN garments AS g ON g.id = i.garment_id
    INNER JOIN colors AS c ON c.id = i.color_id
    INNER JOIN sizes AS s ON s.id = i.size_id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>{$row['id']}</td>
                <td>{$row['garment']}</td>
                <td>{$row['color']}</td>
                <td>{$row['sizee']}</td>
                <td><input type='number' value='{$row['quantity']}'></td>
            </tr>";
    }
}
?>