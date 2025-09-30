const maximo = 10;
const minimo = 1;

const numeroAleatorio = Math.floor(
  Math.random() * (maximo - minimo + 1) + minimo
);

let acertou = false;

for (let i = 0; i < 3; i++) {
  let resposta = prompt(`tente advinhar o número entre ${minimo} e ${maximo}`);

  if (resposta == numeroAleatorio) {
    alert("Parabéns, você acertou!");
    acertou = true;
    break;
  }
}

if (!acertou) {
  alert(`Acabou suas tentativas... O número era ${numeroAleatorio}!`);
}
