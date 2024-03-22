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

$sql = "SELECT i.id, g.name as garment, c.name as color, c.hex, s.name as sizee, i.quantity FROM items AS i
    INNER JOIN garments AS g ON g.id = i.garment_id
    INNER JOIN colors AS c ON c.id = i.color_id
    INNER JOIN sizes AS s ON s.id = i.size_id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $temp_id = $row['id'];
        echo "<tr>
                <td>{$row['id']}</td>
                <td>{$row['garment']}</td>
                <td>{$row['sizee']}</td>
                <td>{$row['color']} <i class='fa-solid fa-circle' style='color: #{$row['hex']};'></td>
                <td><input onclick=\"show_update('i')\" name=\"{$row['id']}\" type='number' value='{$row['quantity']}'></td>
                <td class='nopad-td'>
                    <button onclick=\"delete_item('{$temp_id}', 'i')\" class='dashb-button' style='background-color: rgb(158, 68, 68);'><i class='fa-solid fa-trash'></i></button>
                </td>
            </tr>";
    }
}
?>