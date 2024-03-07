<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Añadir Nuevo Producto</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css">
</head>
<body>

<div class="container mt-5">
  <h2 class="mb-4">Añadir Nuevo Producto</h2>

  <form action="procesar_formulario.php" method="post">
    <div class="mb-3">
      <label for="nombreProducto" class="form-label">Nombre del Producto:</label>
      <input type="text" class="form-control" id="nombreProducto" name="nombreProducto" required>
    </div>

    <div class="mb-3">
      <label for="descripcion" class="form-label">Descripción del Producto:</label>
      <textarea class="form-control" id="descripcion" name="descripcion" rows="3"></textarea>
    </div>

    <div class="mb-3">
      <label for="precio" class="form-label">Precio:</label>
      <input type="number" class="form-control" id="precio" name="precio" step="0.01" required>
    </div>

    <div class="mb-3">
      <label for="existencias" class="form-label">Existencias:</label>
      <input type="number" class="form-control" id="existencias" name="existencias" required>
    </div>

    <div class="mb-3">
      <label for="imagenURL" class="form-label">URL de la Imagen:</label>
      <input type="text" class="form-control" id="imagenURL" name="imagenURL">
    </div>

    <button type="submit" class="btn btn-primary">Agregar Producto</button>
  </form>
</div>

</body>
</html>
