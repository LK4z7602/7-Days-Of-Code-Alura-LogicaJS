let listaDeCompras = [];

const categorias = {
  frutas: [],
  laticinios: [],
  congelados: [],
  outros: [],
};

while (true) {
  const existeItem =
    categorias.frutas.length +
    categorias.laticinios.length +
    categorias.congelados.length +
    categorias.outros.length > 0
      ? "/remover"
      : "";

  const inserir = prompt(
    `Deseja inserir um produto na sua lista de compras? (sim/não${existeItem}) `
  ).toLowerCase();

  if (inserir === "não") {
    break;
  }

  if (inserir === "remover") {
    console.log("Os itens atuais são:");
    for (let cat in categorias) {
      console.log(`${cat}: ${categorias[cat].join(", ")}`);
    }

    const item = prompt("Qual item deseja remover?");
    const categoria = prompt("De qual categoria é este item?").toLowerCase();

    const indexOfItem = categorias[categoria]?.indexOf(item);

    if (indexOfItem !== -1 && indexOfItem !== undefined) {
      categorias[categoria].splice(indexOfItem, 1);
      alert("Item removido.");
    } else {
      alert("Item não encontrado.");
    }
    continue;
  }

  let produto = prompt("Qual produto você deseja inserir?");
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

let resultado = "";
for (let cat in categorias) {
  resultado += `${cat[0].toUpperCase() + cat.slice(1)}:\n- ${categorias[cat].join(
    "\n- "
  ) || "Nenhum item"}\n\n`;
}

console.log(resultado);
alert(`Lista de compras:\n\n${resultado}`);