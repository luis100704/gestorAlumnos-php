<?php
require_once '../db/conexion.php';

$id = $_POST['id'];

if (empty($id)) {
  echo json_encode([
    'success' => false,
    'message' => 'ID no válido'
  ]);
  exit;
}

$sql = "DELETE FROM alumnos WHERE id = $id";
$resultado = mysqli_query($conexion, $sql);

if ($resultado) {
  echo json_encode([
    'success' => true,
    'message' => 'Alumno eliminado correctamente'
  ]);
} else {
  echo json_encode([
    'success' => false,
    'message' => 'Error al eliminar alumno'
  ]);
}
