// Esperar a que el documento HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('¡El documento está listo!');
    
    // 1. SELECCIONAR ELEMENTOS DEL DOM
    // ---------------------------------
    // Seleccionamos el botón que cambiará el tema
    const themeToggle = document.getElementById('theme-toggle');
    
    // 2. DEFINIR FUNCIONES
    // --------------------
    // Función para cambiar entre tema claro y oscuro
    function toggleTheme() {
        // Seleccionamos el elemento body
        const body = document.body;
        
        // Comprobamos si tiene la clase 'dark-theme'
        if (body.classList.contains('dark-theme')) {
            // Si la tiene, la quitamos (volvemos al tema claro)
            body.classList.remove('dark-theme');
            themeToggle.textContent = 'Modo oscuro';
            console.log('Cambiado a tema claro');
        } else {
            // Si no la tiene, la añadimos (cambiamos a tema oscuro)
            body.classList.add('dark-theme');
            themeToggle.textContent = 'Modo claro';
            console.log('Cambiado a tema oscuro');
        }
    }
    
    // 3. AGREGAR EVENTOS
    // ------------------
    // Cuando se hace clic en el botón, se ejecuta la función toggleTheme
    themeToggle.addEventListener('click', toggleTheme);
    
    // Establecemos el texto inicial del botón
    themeToggle.textContent = 'Modo oscuro';
    
    // 4. INICIALIZACIÓN
    // -----------------
    // Podrías agregar código aquí para cargar el tema preferido del usuario
    // por ejemplo, desde localStorage (lo veremos más adelante)
    
    console.log('Script de cambio de tema inicializado correctamente');
});