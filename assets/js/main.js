const nome = document.querySelector(".name");
const Idade = document.querySelector(".idade");
const nota = document.querySelector(".nota");
let botao = document.querySelector(".Adiciona");

function AdicionaAluno() {

  botao.addEventListener("click", (e) => {
    e.preventDefault(e);


    if (nome.value === "" && typeof nome !== "string") {
      return alert(" Insira um nome valido ");
    }

    if (Idade.value.length === 0) {
      return alert(" Insira uma idade valida ");
    }

    if ( nota.value > 100 || nota.value === '') {
      return alert(" Insira uma nota entre 0 e 100");
    }

    let tdNome = document.createElement("td");
    let tdIdade = document.createElement("td");
    let tdNota = document.createElement("td");
    let tdCodigo = document.createElement("td");
    let tdButton = document.createElement("button");


    armazenaAlunos()
  

    let aluno = localStorage.getItem('Aluno');
    let alunos = JSON.parse(aluno)
    let alunosNome = alunos.nome;
    let alunosIdade = alunos.idade;
    let alunosNota = alunos.nota;

    console.log(alunosNome)

    tdNome.textContent = alunosNome;
    tdIdade.textContent = alunosIdade;
    tdNota.textContent =  alunosNota;
    tdCodigo.textContent = geraCodigoAluno(31000, 32999); 
    tdButton.textContent = 'Deletar';

    const table = document.createElement("tr");

    table.appendChild(tdNome);
    table.appendChild(tdIdade);
    table.appendChild(tdNota);
    table.appendChild(tdCodigo);
    table.appendChild(tdButton);
 
    if(nota.value >= 60){
      tdNota.classList.add('nota-sucess')
    }else if(nota.value < 60){
      tdNota.classList.add('nota-error')
    }

    tdButton.classList.add('button-delete')
    tdButton.addEventListener('click' , (e) => {
      const confirma = confirm(' Voce realmente deseja remover este Aluno?')

      if(confirma === true){
        sessionStorage.removeItem('Aluno')
       table.remove();
      }else{
        return false;
      }
    })


    tdNome.addEventListener('dblclick',(e) => {
       let novoNome = prompt(' Insira o nome que voçê deseja alterar ');
       tdNome.textContent = novoNome;
    })

    const tb = document.querySelector(".body-table");
    tb.appendChild(table);    
  });
}



function geraCodigoAluno(min, max) {
  const geraCodigo = Math.floor(Math.random() * (max - min) + min);
  return geraCodigo;
}

function armazenaAlunos(){
  let Armazena = {
    nome: nome.value,
    idade: Idade.value,
    nota: nota.value
  }
  localStorage.setItem('Aluno' , JSON.stringify(Armazena));
 
}

AdicionaAluno();







