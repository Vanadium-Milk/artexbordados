<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validar y obtener los valores del formulario
    $nombre = isset($_POST['validationServer01']) ? $_POST['validationServer01'] : '';
    $apellido = isset($_POST['validationServer02']) ? $_POST['validationServer02'] : '';
    $email = isset($_POST['validationServerEmail']) ? $_POST['validationServerEmail'] : '';
    $phone = isset($_POST['validationServer06']) ? $_POST['validationServer06'] : '';
    $zipcode = isset($_POST['validationServer05']) ? $_POST['validationServer05'] : '';
    $comment = isset($_POST['validationTextarea']) ? $_POST['validationTextarea'] : '';

    // Validar nuevamente si es necesario en el lado del servidor
    $formValido = true;

    if (empty($nombre) || empty($apellido) || empty($email) || empty($phone) || empty($zipcode) || empty($comment)) {
        $formValido = false;
    }

    // Agrega más validaciones según sea necesario...

    // Si todos los campos son válidos, procesa los datos (guárdalos en la base de datos)
    if ($formValido) {
        // Conectarse a la base de datos (reemplaza estos valores con los tuyos)
        $conexion = mysqli_connect("localhost", "root", "", "artex");

        // Verificar la conexión
        if ($conexion === false) {
            die("Error de conexión: " . mysqli_connect_error());
        }

        // Escapar los datos para prevenir inyección de SQL
        $nombre = mysqli_real_escape_string($conexion, $nombre);
        $apellido = mysqli_real_escape_string($conexion, $apellido);
        $email = mysqli_real_escape_string($conexion, $email);
        $phone = mysqli_real_escape_string($conexion, $phone);
        $zipcode = mysqli_real_escape_string($conexion, $zipcode);
        $comment = mysqli_real_escape_string($conexion, $comment);

        // Crear la consulta SQL para insertar los datos en la tabla
        $query = "INSERT INTO clients (FirstName, LastName, Email, Phone, Zipcode, Comment) 
                  VALUES ('$nombre', '$apellido', '$email', '$phone', '$zipcode', '$comment')";

        // Ejecutar la consulta
        if (mysqli_query($conexion, $query)) {
            // Redirigir o mostrar un mensaje de éxito
            header('Location: exito.php');
            exit();
        } else {
            // Mostrar un mensaje de error si la consulta falla
            echo "Error al ejecutar la consulta: " . mysqli_error($conexion);
        }

        // Cerrar la conexión
        mysqli_close($conexion);
    } else {
        // Si hay algún error en la validación, puedes redirigir o mostrar un mensaje de error
        header('Location: error.php');
        exit();
    }
} else {
    // Si no es una solicitud POST, redirige o muestra un mensaje de error
    header('Location: error.php');
    exit();
}
?>
