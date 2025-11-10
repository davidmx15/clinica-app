function mostrar(claseGrupo) {
  const todas = document.querySelectorAll('.seccion');
  todas.forEach(sec => {
    sec.classList.add('oculto');
    sec.classList.remove('visible');
  });

  const grupo = document.querySelectorAll(`.${claseGrupo}`);
  grupo.forEach(sec => {
    sec.classList.remove('oculto');
    sec.classList.add('visible');
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("guardar");

  if (boton) {
    boton.addEventListener("click", function () {
      console.log("⏳ Redirigiendo a receta.html...");
      window.location.href = "receta.html";
    });
  }
});