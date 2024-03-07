<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Imagen con Enlace - Bootstrap</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css">
</head>
<body>

<div class="container mt-1">
    <h2 class="mb-1">Imagen con Enlace desde la Base de Datos</h2>

    <?php
    // Conexión a la base de datos
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "artex";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verificar la conexión
    if ($conn->connect_error) {
        die("Error de conexión: " . $conn->connect_error);
    }

    // ID deseada (puedes cambiar esto según tus necesidades)
    $id_deseada = 1;

    // Consulta SQL para obtener el enlace basado en la ID
    $sql = "SELECT link FROM imageslinks WHERE id = $id_deseada";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Obtener el enlace de la base de datos
        $row = $result->fetch_assoc();
        $enlace = $row['link'];

        // Imprimir la etiqueta de imagen con el enlace
        echo '<a href="' . $enlace . '" target="_blank">';
        echo '<img width="250px" class="img-fluid" src="' . $enlace . '" alt="Imagen desde la Base de Datos">';
        echo '</a>';
    } else {
        echo "No se encontraron resultados.";
    }

    // Cerrar la conexión
    $conn->close();
    ?>
</div>

</body>
</html>
