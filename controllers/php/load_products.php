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

$sql = "SELECT s.embro, s.e_name, s.file_n, ifnull(s.g_name, 'Sudadera') AS g_name, ifnull(s.gcol, 'SNG') AS gcol, s.price + ifnull(s.gar_p, 250) AS t_price, sum(o.quantity) AS t_sales FROM
(SELECT e.id AS embro, e.name AS e_name, e.price, e.file_n, g.name AS g_name, g.price AS gar_p, concat(g.id, c.id) AS gcol, sum(oi.quantity) AS total FROM embroideries AS e
LEFT JOIN order_item AS oi ON oi.embroidery_id = e.id
LEFT JOIN items AS i ON i.id = oi.item_id
LEFT JOIN garments AS g on i.garment_id = g.id
LEFT JOIN colors AS c on i.color_id = c.id
GROUP BY e.id, gcol
ORDER BY total DESC) AS s
LEFT JOIN order_item AS o ON s.embro = o.embroidery_id
GROUP BY s.embro
ORDER BY t_sales DESC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "<div class='col-6 col-md-3 padding-4'>
            <div class='product-card-container hoodies'>
            <a href='product_page.html' style='text-decoration: none; color: black'>
                <div class='product-card-hoodie'>
                <img src='images/clothing-colors/{$row['gcol']}.png' alt=''>
                <img src='images/embroideries/{$row['file_n']}' class='store-embroidery' alt=''>
                </div>
            </a>
            <div class='product-card-description'>
                <h4>{$row['g_name']} {$row['e_name']}</h4>
                <div>
                <span>$ {$row['t_price']} MXN</span>
                <button class='button product-card-button'><i class='fa-regular fa-plus fa-lg' style='color: white;'></i></button>
                </div>
            </div>
            </div>
        </div>";
    }
}
?>