const carreira = prompt("Qual carreira quer seguir? (front-end/back-end)");
if (carreira === "front-end") {
  const tecnologia = prompt("Quer aprender React ou Vue?");
  alert(`Que legal! Mas fica a dica, ${tecnologia} não é fácil!`);
} else if (carreira === "back-end") {
  const tecnologia = prompt("Quer aprender C# ou Java?");
  alert(`Que legal! Mas fica a dica, ${tecnologia} não é fácil`);
}

const especializar = prompt(
  `Quer se especializar na área ${carreira} (responda S) ou ser Fullstack (responda F)?`
);
alert(
  `Muito bom! Você escolheu a carreira de ${carreira} e quer ${
    especializar === "S" ? "se especializar" : "ser Fullstack"
  }.`
);


const tecnologiasArray = [];
let novaTecnologia;

while (true) {
  novaTecnologia = prompt(
    "Qual tecnologia você gostaria de aprender?"
  );

  if (novaTecnologia === null) {
    break;
  }

  tecnologiasArray.push(novaTecnologia);
}

if (tecnologiasArray.length > 0) {
  alert(
    `Muito bom! Você quer aprender as seguintes tecnologias: ${tecnologiasArray.join(
      ", "
    )}`
  );
} else {
  alert("Que pena! Você não adicionou nenhuma tecnologia para aprender.");
}
