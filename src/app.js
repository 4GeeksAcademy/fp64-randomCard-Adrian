import "./style.css";
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
