-- ============================
-- Base de datos: gestor_alumnos
-- ============================

DROP DATABASE IF EXISTS gestor_alumnos;

CREATE DATABASE gestor_alumnos
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_general_ci;

USE gestor_alumnos;

-- ============================
-- Tabla: alumnos
-- ============================

DROP TABLE IF EXISTS alumnos;

CREATE TABLE alumnos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  curso VARCHAR(100) NOT NULL,
  fecha_alta DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ============================
-- Datos de prueba
-- ============================

INSERT INTO alumnos (nombre, email, curso) VALUES
('Juan Pérez', 'juan@test.com', 'PHP Básico'),
('Ana Gómez', 'ana@test.com', 'JavaScript');
