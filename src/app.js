import "./style.css";
/*Hola Hans, si estas leyendo este comentario estoy escondido entre las sombras de un cibercafé barcelonés (estoy bien pero hay mucho adolescente).
 El tragaperras lo haré cuando vuelva a casa ya que es un proyecto más exigente a nivel tiempo, además de que me emociona hacer un tragaperras bonito
 (y estar lo menos posible en este cibercafé que me cobran 4 euros la hora)
 Te debo un vaso.
 */
const generarCarta = () => {
  const palos = ["♠", "♥", "♦", "♣"];
  const valores = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
  const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];
  return {
    palo: paloAleatorio,
    valor: valorAleatorio
  };
};

const actualizarCarta = () => {
  const nuevaCarta = generarCarta();
  const cartaElemento = document.getElementById("carta");

  const valores = cartaElemento.querySelectorAll(".valor");
  valores.forEach(
    valorElemento => (valorElemento.textContent = nuevaCarta.valor)
  );

  const palos = cartaElemento.querySelectorAll(".palo");
  palos.forEach(paloElemento => (paloElemento.textContent = nuevaCarta.palo));
};

actualizarCarta();
