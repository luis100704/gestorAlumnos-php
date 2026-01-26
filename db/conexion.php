<?php

$host = 'localhost';
$usuario = 'root';
$password = '';
$base_datos = 'gestor_alumnos';

$conexion = mysqli_connect($host, $usuario, $password, $base_datos);

if (!$conexion) {
  echo json_encode([
    'success' => false,
    'message' => 'Error de conexión a la base de datos'
  ]);
  exit;
}

mysqli_set_charset($conexion, 'utf8');
