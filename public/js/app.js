$(document).ready(function () {

    let timeoutMensaje = null;

    function mostrarMensaje(texto, tipo = 'success') {

        if (timeoutMensaje) {
            clearTimeout(timeoutMensaje);
        }

        $('#mensaje').html(`
          <div class="alert alert-${tipo}">
            ${texto}
          </div>
        `);
      
        timeoutMensaje = setTimeout(() => {
            $('#mensaje').html('');
        }, 3000);
      }
      
    cargarAlumnos();

    $('#formAlumno').on('submit', function (e) {
        e.preventDefault();

        const datos = {
            alumno_id: $('#alumno_id').val(),
            nombre: $('#nombre').val(),
            email: $('#email').val(),
            curso: $('#curso').val()
        };

        const alumnoId = $('#alumno_id').val();
        const url = alumnoId
            ? '../api/updateAlumno.php'
            : '../api/createAlumno.php';

        $.ajax({
            url: url,
            type: 'POST',
            data: datos,
            dataType: 'json',
            success: function (respuesta) {

                if (!respuesta.success) {
                    mostrarMensaje(respuesta.message, 'danger');
                    return;
                }

                mostrarMensaje(respuesta.message, 'success');

                $('#formAlumno')[0].reset();

                cargarAlumnos();
                $('#alumno_id').val('');
                $('#btnGuardar').text('Guardar alumno');

            },
            error: function () {
                mostrarMensaje('Error al enviar el formulario', 'danger');
            }
        });
    });

    $(document).on('click', '.btn-editar', function () {

        $('#alumno_id').val($(this).data('id'));
        $('#nombre').val($(this).data('nombre'));
        $('#email').val($(this).data('email'));
        $('#curso').val($(this).data('curso'));

        $('#btnGuardar').text('Actualizar alumno');
    });

    $(document).on('click', '.btn-eliminar', function () {

        const id = $(this).data('id');
      
        if (!confirm('¿Seguro que quieres eliminar este alumno?')) {
          return;
        }
      
        $.ajax({
          url: '../api/deleteAlumno.php',
          type: 'POST',
          data: { id: id },
          dataType: 'json',
          success: function (respuesta) {
      
            if (!respuesta.success) {
              mostrarMensaje(respuesta.message, 'danger');
              return;
            }
      
            mostrarMensaje(respuesta.message, 'success');
            cargarAlumnos();
          },
          error: function () {
            mostrarMensaje('Error al eliminar alumno', 'danger');
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
                    mostrarMensaje('Error al cargar alumnos');
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
                  <button 
                  class="btn btn-sm btn-warning btn-editar"
                   data-id="${alumno.id}"
                   data-nombre="${alumno.nombre}"
                   data-email="${alumno.email}"
                   data-curso="${alumno.curso}"
                   >Editar
                   </button>
                  <button 
                  class="btn btn-sm btn-danger btn-eliminar"
                  data-id="${alumno.id}"
                  >Eliminar
                  </button>
                </td>
              </tr>
            `;

            
                });

                $('#tablaAlumnos').html(filas);
            },
            error: function () {
                mostrarMensaje('Error en la petición AJAX', 'danger');
            }
        });
    }

});
