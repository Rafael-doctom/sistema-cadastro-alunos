function alteraTema(){
  const btnCheck = document.querySelector('.check')

  btnCheck.addEventListener('change' , (e) => {
    document.body.classList.toggle("dark", e.target.checked)
  })
}

alteraTema()