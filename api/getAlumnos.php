<?php
require_once '../db/conexion.php';

$sql = "SELECT id, nombre, email, curso, fecha_alta FROM alumnos ORDER BY id DESC";
$resultado = mysqli_query($conexion, $sql);

$alumnos = [];

if ($resultado) {
  while ($fila = mysqli_fetch_assoc($resultado)) {
    $alumnos[] = $fila;
  }
}

echo json_encode([
  'success' => true,
  'data' => $alumnos
]);
