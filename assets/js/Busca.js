function Busca(){
  const busca = document.querySelector('.busca')

  busca.addEventListener('input',() => {
    console.log(busca.value);

    let alunos = document.querySelectorAll('tr')

    if(busca.value > 0){
      for(let i = 0 ; i < alunos.value.length ; i ++){
        let aluno = alunos[i]
        let nomeAluno = aluno.querySelector('td')
        let nome = nomeAluno.textContent;
        if(nome != busca.value){
          nome.style.display = 'none'
        }else{
          nome.style.display = 'block'
        }
      }
    }else{
      for(let i = 0 ; i < alunos.length ; i ++){
        let aluno = alunos[i]
        aluno.classList.remove('invisible')
      }
    }
  })
  
}
Busca()