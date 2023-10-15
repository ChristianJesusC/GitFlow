let indiceActual = 0;
const diapositivas = document.querySelectorAll('.diapositiva');

function cambiarDiapositiva(n) {
  indiceActual += n;
  if (indiceActual < 0) {
    indiceActual = diapositivas.length - 1;
  } else if (indiceActual >= diapositivas.length) {
    indiceActual = 0;
  }

  diapositivas.forEach((diapositiva, index) => {
    diapositiva.classList.remove('activa');
    if (index === indiceActual) {
      diapositiva.classList.add('activa');
    }
  });

  const valorTransformacion = -indiceActual * 100;
  document.querySelector('.carrusel').style.transform = `translateX(${valorTransformacion}%)`;
}