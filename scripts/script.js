document.addEventListener("DOMContentLoaded", () => {

  /* ===== 1. Intercambio de imágenes ===== */
  const imagen = document.getElementById("imagenInteractiva");
  let estado = 1;

  if (imagen) {
    imagen.addEventListener("click", () => {
      if (estado === 1) {
        imagen.src = "images/img2.jpg";
        estado = 2;
      } else {
        imagen.src = "images/img1.jpg";
        estado = 1;
      }
    });
  }

  /* ===== 2. Campo de texto interactivo ===== */
  const input = document.getElementById("textoUsuario");
  const resultado = document.getElementById("resultadoTexto");

  if (input && resultado) {
    input.addEventListener("input", () => {
      if (input.value.trim() === "") {
        resultado.textContent = "El texto cambiará cuando escribas.";
      } else {
        resultado.textContent = "Has escrito: " + input.value;
      }
    });
  }

  /* ===== 3. Objeto en movimiento ===== */
  const planeta = document.getElementById("planeta");
  let posicion = 0;

  function mover() {
    if (!planeta) return;

    posicion += 1;
    planeta.style.left = posicion + "px";

    if (posicion < 300) {
      requestAnimationFrame(mover);
    }
  }

  mover();

});
