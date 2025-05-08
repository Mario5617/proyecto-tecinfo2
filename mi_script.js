document.addEventListener('DOMContentLoaded', function() {
    const miBoton = document.getElementById('miBoton');

    if (miBoton) {
        miBoton.addEventListener('click', function() {
            alert('¡Hola desde el botón interactivo!');
            // Aquí puedes agregar más funcionalidades al botón
        });
    }
});