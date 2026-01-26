$(document).ready(function () {

    cargarAlumnos();

    $('#formAlumno').on('submit', function (e) {
        e.preventDefault();
      
        const datos = {
          nombre: $('#nombre').val(),
          email: $('#email').val(),
          curso: $('#curso').val()
        };
      
        $.ajax({
          url: '../api/createAlumno.php',
          type: 'POST',
          data: datos,
          dataType: 'json',
          success: function (respuesta) {
      
            if (!respuesta.success) {
              alert(respuesta.message);
              return;
            }
      
            $('#formAlumno')[0].reset();
      
            cargarAlumnos();
          },
          error: function () {
            alert('Error al enviar el formulario');
          }
        });
      });
      
  
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
  