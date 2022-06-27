function cadastrarpet() {
  const petsCadastrados = JSON.parse(localStorage.getItem('petsCadastrados')) || [];
  const dados = {
    nomeDoPet: document.querySelector("#nome").value,
    pequeno: document.querySelector("#pequeno").value,
    medio: document.querySelector("#medio").value,
    grande: document.querySelector("#grande").value,
    racaDoPet: document.querySelector("#raca-do-pet").value,
    acessorio: document.querySelector("#acessorio").value,
    telefone: document.querySelector("#telefone").value,
    endereco: document.querySelector("#endereco").value,
    female: document.querySelector("#female").value,
    male: document.querySelector("#male").value,
    description: document.querySelector("#description").value,
    upload: document.querySelector("#upload").value,
  }
  petsCadastrados.push(dados)
  localStorage.setItem('petsCadastrados', JSON.stringify(petsCadastrados))

  document.location.href = "Home2.html"
}


