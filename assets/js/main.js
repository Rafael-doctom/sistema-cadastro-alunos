let nome = document.querySelector(".name");
const erro = document.querySelector('.erro')
let Idade = document.querySelector(".idade");
let nota = document.querySelector(".nota");
let botao = document.querySelector(".Adiciona");
const alunos = (localStorage.getItem('Aluno')) || [];
console.log(alunos)


AdicionaAluno();

function AdicionaAluno() {
  botao.addEventListener("click", (e) => {
    e.preventDefault();
    ValidaAluno()
    armazena()
  });
}

function criaTabela() {

  let tdNome = document.createElement("td");
  tdNome.classList.add('aluno-nome')
  let tdIdade = document.createElement("td");
  let tdNota = document.createElement("td");
  let tdCodigo = document.createElement("td");
  let tdButton = document.createElement("button");

  tdNome.innerHTML = nome.value;
  tdIdade.innerHTML = Idade.value;
  tdNota.innerHTML = nota.value;
  tdCodigo.innerHTML = geraCodigoAluno(1000, 9999);
  tdButton.innerHTML = 'Deletar';

  const table = document.createElement("tr");
  table.classList.add('aluno')
  table.appendChild(tdNome);
  table.appendChild(tdIdade);
  table.appendChild(tdNota);
  table.appendChild(tdCodigo);
  table.appendChild(tdButton);

  if (nota.value >= 60) {
    tdNota.classList.add('nota-sucess')
  } else if (nota.value < 60) {
    tdNota.classList.add('nota-error')
  }

  tdButton.classList.add('button-delete')
  tdButton.addEventListener('click', (e) => {
    const confirma = confirm(' Voce realmente deseja remover este Aluno?')

    if (confirma === true) {
      localStorage.clear()
      table.remove();
    } else {
      return false;
    }
  })

  tdNome.addEventListener('dblclick', (e) => {
    let novoNome = prompt(' Insira o nome que voçê deseja alterar ');
    tdNome.textContent = novoNome;
  })
  const tb = document.querySelector(".body-table");
  tb.appendChild(table)
  return tb
}

function geraCodigoAluno(min, max) {
  const geraCodigo = Math.floor(Math.random() * (max - min) + min);
  return geraCodigo;
}

function ValidaAluno() {
  if (nome.value === "" && typeof nome !== "string") {
    return erro.innerHTML = ('Informe um nome')
  } else if (Idade.value.length === 0) {
    return erro.innerHTML = ('Insira uma idade válida')
  } else if (nota.value > 100 || nota.value === '' || nota.value <= 0) {
    return erro.innerHTML = ('Insira uma nota entre 0 e 100')
  } else {
    erro.innerHTML = ''
    criaTabela()
  }
  nome.value = ''
  Idade.value = ''
  nota.value = ''
}

const armazena = () => {
  let armazena = {
    nome: nome.value,
    idade: Idade.value,
    nota: nota.value,
  }
  localStorage.setItem('Aluno' , JSON.stringify(armazena))

}



