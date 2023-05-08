const formulario = document.querySelector("form");
const botao = document.querySelector("button");
const nomeInput = document.querySelector(".nome");
const emailInput = document.querySelector(".email");
const senhaInput = document.querySelector(".senha");
const telefoneInput = document.querySelector(".telefone");

const cadastrar = () => {
  const { value: nome } = nomeInput;
  const { value: email } = emailInput;
  const { value: senha } = senhaInput;
  const { value: telefone } = telefoneInput;

  fetch(`http://localhost:8080/usuarios`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nome, email, senha, telefone }),
  })
    .then(handleResponse)
    .then(() => console.log("Usuário cadastrado com sucesso"))
    .catch((err) =>
      console.log("Ocorreu um erro ao cadastrar o usuário:", err)
    );
};

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Ocorreu um erro ao cadastrar o usuário");
  }
};

const limpar = () => {
  nomeInput.value = "";
  emailInput.value = "";
  senhaInput.value = "";
  telefoneInput.value = "";
};

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  cadastrar();
  limpar();
});
