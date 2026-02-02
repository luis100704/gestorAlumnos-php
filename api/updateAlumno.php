<?php
require_once '../db/conexion.php';

$id     = $_POST['alumno_id'];
$nombre = $_POST['nombre'];
$email  = $_POST['email'];
$curso  = $_POST['curso'];

if (empty($id) || empty($nombre) || empty($email) || empty($curso)) {
  echo json_encode([
    'success' => false,
    'message' => 'Datos incompletos'
  ]);
  exit;
}

$sql = "UPDATE alumnos 
        SET nombre = '$nombre',
            email = '$email',
            curso = '$curso'
        WHERE id = $id";

$resultado = mysqli_query($conexion, $sql);

if ($resultado) {
  echo json_encode([
    'success' => true,
    'message' => 'Alumno actualizado correctamente'
  ]);
} else {
  echo json_encode([
    'success' => false,
    'message' => 'Error al actualizar alumno'
  ]);
}
