document.getElementById('fechaa').addEventListener('change', function () {
    const fechaa = new Date(this.value);
    const hoy = new Date();
    
    if (isNaN(fechaa)) {
        document.getElementById('resultadoo').textContent = "";
        return;
    }
    
    let años = hoy.getFullYear() - fechaa.getFullYear();
    let meses = hoy.getMonth() - fechaa.getMonth();
    let días = hoy.getDate() - fechaa.getDate();

    // Ajustar meses y años si el mes o el día actual es menor
    if (días < 0) {
        meses--;
    // Obtener días del mes anterior
       const mesAnterior = new Date(hoy.getFullYear(), hoy.getMonth(), 0);
       días += mesAnterior.getDate();
    }
    
    if (meses < 0) {
        años--;
        meses += 12;
    }
    
    let resultado = "";
    
    if (años >= 1) {
        resultado = `${años} año${años > 1 ? "s" : ""}`;
        if (meses > 0) {
            resultado += ` y ${meses} mes${meses > 1 ? "es" : ""}`;
        }
    } else if (meses >= 1) {
        resultado = `${meses} mes${meses > 1 ? "es" : ""}`;
        if (días > 0) {
            resultado += ` y ${días} día${días > 1 ? "s" : ""}`;
        }
    
    } else {
        resultado = `${días} día${días !== 1 ? "s" : ""}`;
    }
    
    document.getElementById('rsultadoo').textContent = "Edad: " + resultado;
});

function mostrarmujer() {
    const genero = document.getElementById("genero").value;
    const mujer = document.getElementById("mujer");
    const embarazo = document.getElementById("embarazo");
    
    embarazo.style.border = "none";
    embarazo.style.borderRadius = "20px";
    embarazo.style.backgroundColor = "rgba(247, 244, 244, 0.562)";
    embarazo.style.marginTop = "20px"

    if (genero === "Femenino") {
        mujer.style.display = "block";
    } else {
        mujer.style.display = "none";
    }
}

document.getElementById("formulario_paciente").addEventListener("submit", function(event) {
  event.preventDefault(); // evita que recargue la página

  const genero = document.getElementById("genero").value;

  if (genero === "Femenino") {
    window.location.href = "agregarcitamujer.html";
  } else if (genero === "Masculino") {
    window.location.href = "agrearcita.html";
  } else {
    alert("Por favor selecciona un género válido.");
  }
});


document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  const telefono = document.getElementById("telefono").value.trim();
  
  const telefonoSinEspacios = telefono.replace(/\s+/g, '');
  const telefonoRegex = /^\d{10}$/;
  if (!telefonoRegex.test(telefonoSinEspacios)){
    mostrarMensaje("Introduzca un número válido de 10 dígitos.", "error");
    return;
  }

});