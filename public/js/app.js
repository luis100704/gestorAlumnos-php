$(document).ready(function () {

    cargarAlumnos();
  
    function cargarAlumnos() {
      $.ajax({
        url: '../api/getAlumnos.php',
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
  
          if (!respuesta.success) {
            alert('Error al cargar alumnos');
            return;
          }
  
          let filas = '';
  
          respuesta.data.forEach(function (alumno) {
            filas += `
              <tr>
                <td>${alumno.nombre}</td>
                <td>${alumno.email}</td>
                <td>${alumno.curso}</td>
                <td>
                  <button class="btn btn-sm btn-warning">Editar</button>
                  <button class="btn btn-sm btn-danger">Eliminar</button>
                </td>
              </tr>
            `;
          });
  
          $('#tablaAlumnos').html(filas);
        },
        error: function () {
          alert('Error en la petición AJAX');
        }
      });
    }
  
  });
  