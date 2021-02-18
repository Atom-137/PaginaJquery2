$(document).ready(function () {

  var formulario = $('#formulario');
  var nombre = $('#nombre');
  var apellido = $('#apellido');
  var email = $('#email');

  function valNombre(e) {
    if (nombre.val() == '' || nombre.val() == null) {
      e.preventDefault();
      $('input[type="text"] + .error').css('display', 'block');
    } else {
      $('input[type="text"] + .error').css('display', 'none');
    }
  }


  function valApellido(e) {

    if (apellido.val() == '' || apellido.val() == null) {
      e.preventDefault();
      $('input[type="text"] + .error2').css('display', 'block');
    } else {
      $('input[type="text"] + .error2').css('display', 'none');
    }
  }

  function valEmail(e) {

    if (email.val() == '' || email.val() == null) {
      e.preventDefault();
      $('input[type="email"] + .error').css('display', 'block');
    } else {
      $('input[type="email"] + .error').css('display', 'none');
    }

  }


  function validacion(e) {
    valNombre(e);
    valApellido(e);
    valEmail(e);
  }

  formulario.on('submit', validacion);

})
