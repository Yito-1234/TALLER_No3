$(document).ready(function(){
    $('#formulario').submit(function(){
        var nombre = $('#nombre').val();
        var apellido = $('#apellido').val();

        //almacenar los valores dentro de localstorage
        localStorage.setItem('nombre',nombre);
        localStorage.setItem('apellido',apellido);
    });

    var nombre = localStorage.getItem('nombre');
    var apellido =localStorage.getItem('apellido');

    if(nombre != null && nombre != 'undefined'){
        //llamamos al documento sesion.html
        window.location = 'sesion.html';
    }
});

