<?php
// login.php

// Verifica si se han enviado datos por POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoge los datos del formulario
    $email = $_POST["email"];
    $pasword = $_POST["password"];

    // Conéctate a la base de datos
    $conn = new mysqli("localhost", "root", "", "artex");

    // Verifica la conexión
    if ($conn->connect_error) {
        die("Error de conexión: " . $conn->connect_error);
    }

    // Consulta para verificar las credenciales
    $sql = "SELECT * FROM superusers WHERE email='$email' AND pasword='$pasword'";
    $result = $conn->query($sql);

    // Si hay una fila, las credenciales son correctas
    if ($result->num_rows == 1) {
        // Redirige a index.html
        header("Location: admin.php");
        exit();
    } else {
        // Credenciales incorrectas, puedes manejar esto de la manera que prefieras
        echo "Credenciales incorrectas";
    }

    // Cierra la conexión a la base de datos
    $conn->close();
}
?>
