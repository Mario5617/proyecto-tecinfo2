document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.interactive-button');

    if (button) {
        button.addEventListener('click', (event) => {
            console.log('Botón "Checa más información aquí" clickeado.');
        });
    }
});
