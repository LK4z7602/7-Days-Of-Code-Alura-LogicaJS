let listaDeCompras = [];

const categorias = {
  frutas: [],
  laticinios: [],
  congelados: [],
  outros: [],
};

while (true) {
  const inserir = prompt(
    "Deseja inserir um produto na sua lista de compras? (sim/não) "
  ).toLowerCase();
  if (inserir === "não") {
    break;
  }

  let produto = prompt("Qual produto você deseja inserir? ");
  listaDeCompras.push(produto);

  let categoria = prompt(
    "Qual a categoria do produto? (frutas, laticínios, congelados, outros) "
  ).toLowerCase();
  if (!categorias[categoria]) {
    categorias.outros.push(produto);
  } else {
    categorias[categoria].push(produto);
  }
}

console.log(
  `Laticínios: ${categorias.laticinios}\nFrutas: ${categorias.frutas}\nCongelados: ${categorias.congelados}\nOutros: ${categorias.outros}`
);
alert(
  `Lista de compras: ${listaDeCompras}\nLaticínios: ${categorias.laticinios}\nFrutas: ${categorias.frutas}\nCongelados: ${categorias.congelados}\nOutros: ${categorias.outros}`
);
