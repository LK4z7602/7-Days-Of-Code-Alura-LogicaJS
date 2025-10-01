const escolha = prompt(
  "Qual operação deseja usar? (somar/subtrair/dividir/multiplicar/sair"
);

if (escolha === "sair") {
  alert("Até mais!");
} else {
  const n1 = parseInt(prompt("digite o primeiro numero"));
  const n2 = parseInt(prompt("digite o segundo numero"));

  let resposta = "";

  console.log(escolha, n1, n2);

  switch (escolha) {
    case "somar":
      resposta = somar(n1, n2);
      break;
    case "dividir":
      resposta = dividir(n1, n2);
      break;
    case "multiplicar":
      resposta = multiplicar(n1, n2);
      break;
    case "subtrair":
      resposta = subtrair(n1, n2);
      break;
    case "sair":
      resposta = "Até mais!";
      break;

    default:
      resposta = "Números ou operação invalidos";
      break;
  }

  alert(resposta);
}

function somar(n1, n2) {
  return n1 + n2;
}

function subtrair(n1, n2) {
  return n1 - n2;
}

function dividir(n1, n2) {
  return n1 / n2;
}

function multiplicar(n1, n2) {
  return n1 * n2;
}
