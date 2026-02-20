const reloj = document.querySelector('.reloj');

function actualizarReloj() {
  const tiempo = new Date();  // 'Date' con 'D' mayúscula

  const horas = tiempo.getHours().toString().padStart(2, '0');  // Añade ceros a la izquierda si es necesario
  const minutos = tiempo.getMinutes().toString().padStart(2, '0');  // Añade ceros a la izquierda si es necesario
  const segundos = tiempo.getSeconds().toString().padStart(2, '0');  // Añade ceros a la izquierda si es necesario

  reloj.innerText = `${horas} : ${minutos} : ${segundos}`;  // Usa comillas invertidas para la interpolación
}

// Llama a la función para actualizar el reloj inicialmente
actualizarReloj();

// Opcionalmente, puedes llamar a actualizarReloj() cada segundo para mantener el reloj actualizado
setInterval(actualizarReloj, 1000);