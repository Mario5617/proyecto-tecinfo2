document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.contenedor-imagenes img');

    imagenes.forEach(img => {
        img.addEventListener('click', function() {
            // Al hacer clic, puedes realizar alguna acción, como mostrar la imagen en un modal
            alert(`Clic en la imagen: ${this.alt}`);
            // Aquí puedes agregar la lógica para un lightbox o una vista ampliada
        });
    });
});