let senha = document.querySelector('.senha')
let formulario = document.querySelector('.form')
let usuario = document.querySelector('.name')
let erroUsuario = document.querySelector('.erroUsuario')
let btn = document.querySelector('.btn-entra')
let erroSenha = document.querySelector('.erroSenha')

function verifica(){

  btn.addEventListener('click', (e) => {

   e.preventDefault();

  if(usuario.value === '') {
    erroUsuario.classList.add('usuario')
    return erroUsuario.innerHTML = ' Usuário Inválido'
  }else{
    erroUsuario.style.display = 'none'
  }

  if(senha.value <= 4 || senha.value === ''){
    erroSenha.classList.add('senha')
    return erroSenha.innerHTML = 'A senha precisa ter entre 4 e 12 caracteres'
  }else{
    erroSenha.style.display = 'none'
  }

  if(usuario.value === 'admin' && senha.value === 'admin'){
    alert('Logando usuário ... ')
    formulario.submit()
  }

  })

}

verifica()