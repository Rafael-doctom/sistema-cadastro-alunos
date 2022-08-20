function Busca() {
  const busca = document.querySelector('.busca')

  busca.addEventListener('input', () => {
    let alunos = document.querySelectorAll('.aluno')

    if (busca.value.length > 0) {
      for (let i = 0; i <= alunos.length; i++) {
        let aluno = alunos[i]
        let tableNome = aluno.querySelector('.aluno-nome')
        let alunoNome = tableNome.textContent;
        console.log(alunoNome)

        if (alunoNome !== busca.value) {
          aluno.classList.add('invisible')
        } else {
          aluno.classList.remove('invisible')
        }
      }
    } else {
      for (let i = 0; i <= alunos.length; i++) {
        let aluno = alunos[i]
        aluno.classList.remove('invisible')
      }
    }
  })
}
Busca()
