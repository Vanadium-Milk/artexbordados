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

$sql = "SELECT id, name, size, tags, file_n, price FROM embroideries";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $temp_id = $row['id'];
        echo "<tr>
                <td>{$temp_id}</td>
                <td>{$row['name']}</td>
                <td>{$row['size']}</td>
                <td>{$row['tags']}</td>
                <td><img src='images/embroideries/{$row['file_n']}' style='width: 50px;'></td>
                <td><input onclick=\"show_update('e')\" name=\"{$row['id']}\" type='number' value='{$row['price']}'></td>
                <td class='nopad-td'>
                    <button onclick=\"delete_item({$temp_id}, 'e')\" class='dashb-button' style='background-color: rgb(158, 68, 68);'><i class='fa-solid fa-trash'></i></button>
                </td>
            </tr>";
    }
}
?>