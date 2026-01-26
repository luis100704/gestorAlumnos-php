<?php
require_once '../db/conexion.php';

$nombre = $_POST['nombre'] ?? '';
$email  = $_POST['email'] ?? '';
$curso  = $_POST['curso'] ?? '';

if ($nombre === '' || $email === '' || $curso === '') {
  echo json_encode([
    'success' => false,
    'message' => 'Todos los campos son obligatorios'
  ]);
  exit;
}

$sql = "INSERT INTO alumnos (nombre, email, curso)
        VALUES ('$nombre', '$email', '$curso')";

$resultado = mysqli_query($conexion, $sql);

if ($resultado) {
  echo json_encode([
    'success' => true,
    'message' => 'Alumno creado correctamente'
  ]);
} else {
  echo json_encode([
    'success' => false,
    'message' => 'Error al crear alumno'
  ]);
}
