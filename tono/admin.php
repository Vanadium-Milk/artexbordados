<!DOCTYPE html>
<html lang="es">
<head>
<div class="container mt-5">
  <div class="row">
    <div class="col">
      <h2 class="mb-4">Lista de Clientes</h2>
    </div>
    <div class="col text-end">
      <!-- Botón para ir directamente a la sección -->
      <a href="contactado.php" class="btn btn-primary">Ir a la Lista</a>
      <a href="nuevoproducto.php" class="btn btn-primary">Agregar nuevo producto</a>
    </div>
  </div>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Clientes - Artex</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css">
</head>
<body>

<div class="container mt-5">
  <h2 class="mb-4" >Lista de Clientes</h2>

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

  // Manejar la eliminación si se recibe una solicitud de eliminación
  if (isset($_GET['delete_id'])) {
      $delete_id = $_GET['delete_id'];

      // Obtener los datos del cliente antes de eliminar
      $select_sql = "SELECT * FROM clients WHERE id_pedido = $delete_id";
      $result_select = $conn->query($select_sql);

      if ($result_select->num_rows > 0) {
          $row_select = $result_select->fetch_assoc();

          // Insertar los datos en la tabla "contactado"
          $insert_sql = "INSERT INTO contactado (FirstName, LastName, Email, Phone, Zipcode, Comment, id_pedido) 
                         VALUES ('{$row_select['FirstName']}', '{$row_select['LastName']}', '{$row_select['Email']}', 
                                 '{$row_select['Phone']}', '{$row_select['Zipcode']}', '{$row_select['Comment']}', 
                                 '{$row_select['id_pedido']}')";
          $conn->query($insert_sql);
      }

      // Eliminar el registro de la tabla "clients"
      $delete_sql = "DELETE FROM clients WHERE id_pedido = $delete_id";
      $conn->query($delete_sql);
  }

  // Consulta SQL para obtener datos de la tabla clients
  $sql = "SELECT FirstName, LastName, Email, Phone, Zipcode, Comment, id_pedido FROM clients";
  $result = $conn->query($sql);

  // Comprobar si hay resultados
  if ($result->num_rows > 0) {
      // Mostrar los datos en una tabla HTML con Bootstrap
      echo '<table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Zipcode</th>
                  <th scope="col">Comment</th>
                  <th scope="col">ID Pedido</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>';

      while ($row = $result->fetch_assoc()) {
          echo '<tr>
                  <td>' . $row['FirstName'] . '</td>
                  <td>' . $row['LastName'] . '</td>
                  <td>' . $row['Email'] . '</td>
                  <td>' . $row['Phone'] . '</td>
                  <td>' . $row['Zipcode'] . '</td>
                  <td>' . $row['Comment'] . '</td>
                  <td>' . $row['id_pedido'] . '</td>
                  <td>
                    <a href="?delete_id=' . $row['id_pedido'] . '" class="btn btn-danger" onclick="return confirm(\'¿Estás seguro de que deseas eliminar este registro?\')">Eliminar</a>
                  </td>
                </tr>';
      }

      echo '</tbody></table>';
  } else {
      echo "No hay resultados";
  }

  // Cerrar la conexión
  $conn->close();
  ?>

</div>

</body>
</html>
