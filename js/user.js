console.log("✅ JS cargado correctamente");

document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();
   
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirm-password").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const cedu = document.getElementById("cedu").value.trim();
  const mensaje = document.getElementById("mensaje");

   // Función para mostrar mensaje
  const mostrarMensaje = (texto, tipo) => {
    mensaje.textContent = texto;
    mensaje.className = `mensaje ${tipo}`;

    // Ocultar mensaje después de 4 segundos
    setTimeout(() => {
      mensaje.textContent = "";
      mensaje.className = "mensaje";
    }, 4000);
  };

  if (!nombre || !cedu || !telefono || !email || !password || !confirmPassword) {
    mostrarMensaje("Por favor, llena todos los campos.", "error");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    mostrarMensaje("Por favor, ingresa un correo válido.", "error");
    return;
  }

  if (password.length < 8) {
    mostrarMensaje("La contraseña debe tener al menos 8 caracteres.", "error");
    return;
  }

  if (password !== confirmPassword) {
    mostrarMensaje("Las contraseñas no coinciden.", "error");
    return;
  }

  const telefonoSinEspacios = telefono.replace(/\s+/g, '');
  const telefonoRegex = /^\d{10}$/;
  if (!telefonoRegex.test(telefonoSinEspacios)) {
    mostrarMensaje("Introduzca un número válido de 10 dígitos.", "error");
    return;
  }

  mostrarMensaje("Formulario válido, enviando datos...", "success");

  console.log("✅ Todas las validaciones pasaron");

  setTimeout(() => {
    console.log("⏳ Redirigiendo a inicio.html...");
    window.location.href = "inicio.html";
  }, 1000);
  
});
