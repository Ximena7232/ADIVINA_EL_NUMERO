let numeroSecreto = Math.floor(Math.random() * 100) + 1;

function verificar() {
  const input = document.getElementById("numero");
  const mensaje = document.getElementById("mensaje");
  const intento = Number(input.value);

  if (!input.value) {
    mensaje.textContent = "Ingresa un número válido";
    return;
  }

  if (intento < numeroSecreto) {
    mensaje.textContent = "El número es mayor ⬆️";
  } else if (intento > numeroSecreto) {
    mensaje.textContent = "El número es menor ⬇️";
  } else {
    mensaje.textContent = "¡ADIVINASTE! 🎉";
  }
}

function reiniciar() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  document.getElementById("numero").value = "";
  document.getElementById("mensaje").textContent = "";
}
