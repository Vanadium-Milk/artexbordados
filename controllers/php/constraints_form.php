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

$sql = "SELECT id AS id_col, name, hex, IF(EXISTS(SELECT * from garment_colors where color_id = id_col and garment_id = '{$g_type}'), 'checked', '') AS valid
    FROM colors";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<div class='col-md-6'>
        <table style='margin: 40px; width: 100%;'>
            <tr>
                <th>ID</th>
                <th>Color</th>
                <th>Valid</th>
            </tr>";
    while ($row = $result->fetch_assoc()) {
        $temp_id = $row['id_col'];
        echo "<tr>
                <td>{$row['id_col']}</td>
                <td>{$row['name']} <i class='fa-solid fa-circle' style='color: #{$row['hex']};'></td>
                <td><input type='checkbox' name='{$g_type}color[]' value='{$temp_id}' {$row['valid']}></td>
            </tr>";
    }
    echo "</table>
        </div>";
}

$sql = "SELECT s.id AS s_id, s.name, IF(EXISTS(SELECT * from garment_sizes where size_id = s_id and garment_id = '{$g_type}'), 'checked', '') AS valid, gs.price
FROM sizes AS s
LEFT JOIN garment_sizes AS gs ON s.id = gs.size_id and gs.garment_id = '{$g_type}'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<div class='col-md-6'>
        <table style='margin: 40px; width: 100%;'>
            <tr>
                <th>ID</th>
                <th>Size</th>
                <th>Valid</th>
                <th>Price (default if empty)</th>
            </tr>";
    while ($row = $result->fetch_assoc()) {
        $temp_id = $row['s_id'];
        echo "<tr>
                <td>{$row['s_id']}</td>
                <td>{$row['name']}</td>
                <td><input type='checkbox' name='{$g_type}size[]' value='{$temp_id}' {$row['valid']}></td>
                <td><input type='number' name='{$g_type}{$temp_id}s_price' value='{$row['price']}'></td>
            </tr>";
    }
    echo "</table>
        </div>";
}
?>