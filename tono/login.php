<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Login</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css">
  <style>
    body {
      background-color: #316639;
      color: #000000;
    }
    .login-container {
      margin-top: 100px;
    }
  </style>
</head>
<body>

<div class="container login-container">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">Inicio de Sesión</div>
        <div class="card-body">
          <form method="post" action="loginphp.php">
            <div class="mb-3">
              <label for="email" class="form-label">Correo electrónico:</label>
              <input type="email" class="form-control" id="email" name="email" required>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Contraseña:</label>
              <input type="password" class="form-control" id="password" name="password" required>
            </div>
            <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

</body>
</html>
