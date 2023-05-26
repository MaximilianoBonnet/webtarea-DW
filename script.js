
/*document.querySelector('#send-button').addEventListener('click', function(event) {
  event.preventDefault();
   
   
  fetch('/send-email', {
    method: 'POST',
    body: new FormData(document.querySelector('#contact-form'))
    })

    .then(function(response) {
      if (response.ok) {
        alert('¡Correo enviado con éxito!');
      }
    })
    .catch(function(error) {
      
      console.error('Error:', error);
    });
  });
*/
var reloj = document.querySelector('.reloj');

// Función para actualizar el reloj cada segundo
function actualizarReloj() {
  var fecha = new Date();
  var horas = fecha.getHours();
  var minutos = fecha.getMinutes();
  var segundos = fecha.getSeconds();
  reloj.innerHTML = horas + ':' + minutos + ':' + segundos;
}

// Actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);


function enviarFormulario() {
  // validar el formulario y enviar el mensaje
  alert('Mensaje enviado con éxito!');
}


function moveAnimation() {
  let animation = document.getElementById('animation');
  let posX = 0;
  let posY = 0;
  let velX = 3;
  let velY = 2;
  let maxPosX = window.innerWidth - animation.clientWidth;
  let maxPosY = window.innerHeight - animation.clientHeight;
  let interval = setInterval(frame, 10);
  
  function frame() {
    // Mover la animación
    posX += velX;
    posY += velY;
    animation.style.left = posX + 'px';
    animation.style.top = posY + 'px';
    
    // Rebotar cuando llega a los bordes
    if (posX < 0 || posX > maxPosX) {
      velX = -velX;
    }
    if (posY < 0 || posY > maxPosY) {
      velY = -velY;
    }
  }
}


// Ejecuta la animación cuando la página carga
window.addEventListener('load', moveAnimation);


function toggleCalculadora() {
  var calculadoraContainer = document.getElementById('calculadora-container');
  calculadoraContainer.style.display = (calculadoraContainer.style.display === 'none') ? 'block' : 'none';
}

function calcular(operacion) {
  var valor1 = parseFloat(document.getElementById('valor1').value);
  var valor2 = parseFloat(document.getElementById('valor2').value);
  var resultado;

  switch (operacion) {
    case 1: // Suma
      resultado = valor1 + valor2;
      break;
    case 2: // Resta
      resultado = valor1 - valor2;
      break;
    case 3: // Multiplicación
      resultado = valor1 * valor2;
      break;
    case 4: // División
      if (valor2 !== 0) {
        resultado = valor1 / valor2;
      } else {
        document.getElementById('resultado').textContent = 'No es posible dividir por cero';
        return;
      }
      break;
    default:
      document.getElementById('resultado').textContent = 'Operación inválida';
      return;
  }

  document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
}
function cerrarCalculadora() {
  var calculadoraContainer = document.getElementById('calculadora-container');
  calculadoraContainer.style.display = 'none';
}
function cambiarImagen(elemento, nuevaImagen) {
  elemento.src = nuevaImagen;
}

function restaurarImagen(elemento, imagenOriginal) {
  elemento.src = imagenOriginal;
}
