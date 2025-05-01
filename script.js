// Esperar a que el documento HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    console.log("¡El documento está listo!");
  
    // 1. SELECCIONAR ELEMENTOS DEL DOM
    const themeToggle = document.getElementById("theme-toggle");
  
    // 2. DEFINIR FUNCIONES
    function toggleTheme() {
      const body = document.body;
  
      if (body.classList.contains("dark-theme")) {
        body.classList.remove("dark-theme");
        themeToggle.textContent = "Modo oscuro";
        console.log("Cambiado a tema claro");
      } else {
        body.classList.add("dark-theme");
        themeToggle.textContent = "Modo claro";
        console.log("Cambiado a tema oscuro");
      }
    }
  
    // Nueva función: Configura el mensaje de bienvenida personalizado
    // Visualmente: Aparecerá en la parte superior del contenido principal,
    // justo debajo del encabezado con tu nombre y profesión
    function setupWelcomeMessage() {
      // Intentamos recuperar el nombre del visitante del almacenamiento local
      // Si ya nos visitó antes, recordamos su nombre
      let visitorName = localStorage.getItem("visitorName");
  
      // Si es la primera visita (no hay nombre guardado)
      // Mostramos un cuadro de diálogo para pedirle su nombre
      if (!visitorName) {
        visitorName = prompt("¡Bienvenido/a a mi portfolio! ¿Cómo te llamas?") || "Visitante";
        localStorage.setItem("visitorName", visitorName);
      }
  
      // Creamos un elemento para mostrar el mensaje de bienvenida
      // Visualmente: Será un contenedor que aparecerá en la parte superior 
      // de la sección principal, con el saludo personalizado
      const welcomeElement = document.createElement("div");
      welcomeElement.className = "welcome-message";
      welcomeElement.textContent = `¡Hola ${visitorName}! Bienvenido/a a mi portfolio.`;
  
      // Insertamos el mensaje al principio de la sección principal
      // Visualmente: Quedará entre el encabezado y la sección "Sobre mí"
      const mainElement = document.querySelector("main");
      mainElement.insertBefore(welcomeElement, mainElement.firstChild);
  
      // Creamos el botón para cambiar el nombre
      // Visualmente: Aparecerá a la derecha del mensaje de bienvenida
      const changeNameBtn = document.createElement("button");
      changeNameBtn.textContent = "Cambiar nombre";
      changeNameBtn.className = "change-name-btn";
      welcomeElement.appendChild(changeNameBtn);
  
      // NUEVO: Botón de reinicio 
      // Visualmente: Un botón pequeño junto al de "Cambiar nombre"
      // que permite borrar el nombre guardado y empezar de nuevo
      const resetBtn = document.createElement("button");
      resetBtn.textContent = "Reiniciar";
      resetBtn.style.fontSize = "12px";
      resetBtn.className = "reset-btn";
      resetBtn.style.marginLeft = "10px";
      welcomeElement.appendChild(resetBtn);
  
      // Configuramos qué ocurre al hacer clic en "Cambiar nombre"
      // Visualmente: Al hacer clic, aparecerá un cuadro de diálogo
      // y se actualizará el mensaje con el nuevo nombre
      changeNameBtn.addEventListener("click", function () {
        const newName = prompt("¿Cómo te llamas?") || "Visitante";
        localStorage.setItem("visitorName", newName);
        welcomeElement.textContent = `¡Hola ${newName}! Bienvenido/a a mi portfolio.`;
        welcomeElement.appendChild(changeNameBtn);
        welcomeElement.appendChild(resetBtn);
      });
  
      // NUEVO: Configuramos qué ocurre al hacer clic en "Reiniciar"
      // Visualmente: Borra los datos guardados y recarga la página,
      // lo que hará que aparezca el cuadro inicial para introducir el nombre
      resetBtn.addEventListener("click", function () {
        localStorage.removeItem("visitorName");
        alert("Datos borrados. La página se recargará.");
        location.reload();
      });
    }
  
    // 3. AGREGAR EVENTOS
    themeToggle.addEventListener("click", toggleTheme);
    themeToggle.textContent = "Modo oscuro";
  
    // 4. INICIALIZACIÓN
    // Llamamos a la función de bienvenida para que se ejecute al cargar la página
    setupWelcomeMessage();
  
    console.log("Script de cambio de tema inicializado correctamente");
  });
