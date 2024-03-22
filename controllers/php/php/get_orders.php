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

$sql = "SELECT o.id, o.ord_date, g.name as garment, c.name as color, c.hex, s.name as sizee, e.name as embroidery, o.ord_status FROM orders AS o
    INNER JOIN order_item as oi ON o.id = oi.order_id
    INNER JOIN items AS i ON i.id = oi.item_id
    INNER JOIN garments AS g ON g.id = i.garment_id
    INNER JOIN colors AS c ON c.id = i.color_id
    INNER JOIN sizes AS s ON s.id = i.size_id
    INNER JOIN embroideries AS e on e.id = oi.embroidery_id
    ORDER BY o.ord_status";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>{$row['id']}</td>
                <td>{$row['ord_date']}</td>
                <td>{$row['garment']}</td>
                <td>{$row['color']} <i class='fa-solid fa-circle' style='color: #{$row['hex']};'></td>
                <td>{$row['sizee']}</td>
                <td>{$row['embroidery']}</td>
                <td>{$row['ord_status']}</td>
                <td class='nopad-td'>
                    <button class='dashb-button' style='background-color: rgb(158, 68, 68);'>
                        <i class='fa-solid fa-trash'></i>
                    </button>
                    <button class='dashb-button'>></button>
                </td>
            </tr>";
    }
}
?>