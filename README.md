# Gestor de Alumnos con AJAX y PHP

Proyecto CRUD clásico desarrollado con **PHP procedimental y AJAX**, enfocado a demostrar **fundamentos reales de desarrollo web** a nivel junior.

Este proyecto no utiliza frameworks modernos ni arquitecturas SPA, ya que el objetivo es entender el flujo completo **frontend ↔ backend ↔ base de datos** de forma clara y directa.

---

## 🎯 Objetivo del proyecto

- Practicar desarrollo web clásico
- Entender cómo funciona AJAX realmente
- Trabajar con PHP y MySQL sin frameworks
- Implementar un CRUD completo
- Simular un proyecto realista para perfil junior

---

## 🧠 Qué demuestra este proyecto

- HTML semántico
- Maquetación responsive con Bootstrap 4
- JavaScript y jQuery
- Peticiones AJAX sin recargar la página
- Comunicación frontend ↔ backend
- Backend en PHP procedimental
- Operaciones CRUD en MySQL
- Manejo de respuestas JSON
- Organización básica de un proyecto web
- Uso de Git y GitHub

---

## 🧩 Funcionalidades

### Gestión de alumnos
- Crear alumno
- Listar alumnos
- Editar alumno
- Eliminar alumno

### Datos del alumno
- Nombre
- Email
- Curso
- Fecha de alta automática

### Funcionalidades técnicas
- Formularios con validación básica
- AJAX con jQuery
- Backend PHP con endpoints independientes
- Base de datos relacional MySQL
- Mensajes visuales de éxito y error con Bootstrap

---

## 🔧 Stack utilizado

- HTML5
- CSS3
- Bootstrap 4
- JavaScript
- jQuery
- AJAX
- PHP (procedimental)
- MySQL / MariaDB
- Git / GitHub

---

## 🗂️ Estructura del proyecto

/public
/js
app.js
index.html

/api
getAlumnos.php
createAlumno.php
updateAlumno.php
deleteAlumno.php

/db
conexion.php
schema.sql

---


---

## 🛠️ Instalación en local

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
Mover el proyecto a la carpeta del servidor local
(Ejemplo en XAMPP):
C:\xampp\htdocs\

Crear la base de datos ejecutando el archivo:
/db/schema.sql
(en phpMyAdmin o consola MySQL)

Configurar la conexión a la base de datos en:
/db/conexion.php
Abrir el proyecto en el navegador:
http://localhost/gestor-alumnos-php/public/index.html