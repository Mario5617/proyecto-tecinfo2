document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.interactive-button');

    if (button) {
        button.addEventListener('click', (event) => {
            // Opcional: Puedes añadir aquí alguna lógica antes de la descarga
            // Por ejemplo, un mensaje en la consola o un pequeño popup.
            console.log('Botón "Descargar Información Adicional" clickeado.');
            // Si el atributo 'download' está presente en el HTML, el navegador gestionará la descarga.
            // Si quisieras hacer algo más complejo con JavaScript, necesitarías un enfoque diferente,
            // pero para una descarga directa, el atributo 'download' en el HTML es suficiente.
        });
    }
});
