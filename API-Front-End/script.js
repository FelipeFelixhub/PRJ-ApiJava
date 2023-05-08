
// Declaracao das constantes

const formulario = document.querySelector("form");
const botao = document.querySelector("button");
const inome = document.querySelector(".nome");
const iemail = document.querySelector(".email");
const isenha = document.querySelector(".senha");
const itelefone = document.querySelector(".telefone");

// Mascara para o telefone (11)23456-7890


const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }

  // Funcoes

  function cadastrar () {

    fetch("http://localhost:8080/usuarios",
        {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                nome: inome.value,
                email: iemail.value,
                senha: isenha.value,
                telefone: itelefone.value
            })
        })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) })

}

function limpar () {
    inome.value = "",
    iemail.value = "",
    isenha.value = "",
    itelefone.value = ""

}

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

   cadastrar();
   limpar();

});
