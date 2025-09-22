// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Sé que dijimos que ya no íbamos a hablarnos", time: 0 },
  { text: "Pero tengo esta situación que está pasando", time: 3 },
  { text: "Y, poquito a poco, me va matando", time: 8 },
  { text: "Y no encuentro la solución", time: 12 },
  { text: "Tengo un fantasma que to' el día me persigue", time: 12 },
  { text: "Y que me muestra tu sonrisa donde mire", time: 20 },
  { text: "No encuentro la manera de ser libre", time: 24 },
  { text: "¿Bebé, qué fue lo que pasó?", time: 28 },
  { text: "Ay, sácame esta maldición, por favor", time: 34 },
  { text: "Esta que hace que no pare, que no pare de pensar en vos", time: 41 },
  { text: "Y justo cuando, cuando ya me siento un poco mejor", time: 49 },
  { text: "Justo ahí vuelve a atacarme ese recuerdo de tu sabor", time: 58 },
  { text: "En las noches, yo pienso en qué pasó con nosotros", time: 67 },
  { text: "No volvimos a hablarnos, ¿qué habrá sido de vos?", time: 71 },
  { text: "Y quisiera que vuelvas, para que ese fantasma", time: 76 },
  { text: "Me deje tranquilo y empezar otra vez", time: 80 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Mostrar de inmediato
    lyrics.style.opacity = 1;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 100);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);