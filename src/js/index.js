function getElementValueById(id) {
  const input = document.getElementById(id);
  return input.value;
}

const button = document.querySelector("button");
button.addEventListener("click", (e) => {
  e.preventDefault();

  const name = getElementValueById("name");
  const email = getElementValueById("email");
  const phone = getElementValueById("phone");
  const password = getElementValueById("password");
  const passwordConfirm = getElementValueById("password-confirm");

  console.log(name, email, phone, password, passwordConfirm);


  /*if (name === undefined || name === null || name === "") {
    console.log("Name está vazio");
    const nameError = document.getElementById("name-error");
    console.log(nameError);
    nameError.textContent = "Nome é obrigatório.";
  }

  if (email === undefined || email === null || email === "") {
    console.log("E-mail está vazio");
    const emailError = document.getElementById("email-error");
    console.log(emailError);
    emailError.textContent = "E-mail é obrigatório.";
  }

  if (phone === undefined || phone === null || phone === "") {
    console.log("Telefone está vazio");
    const phoneError = document.getElementById("phone-error");
    console.log(phoneError);
    phoneError.textContent = "Telefone é obrigatório.";
  }

  if (password === undefined || password === null || password === "") {
    console.log("A senha está vazia");
    const passwordError = document.getElementById("password-error");
    console.log(passwordError);
    passwordError.textContent = "Telefone é obrigatório.";
  }

  if (passwordConfirm === undefined || passwordConfirm === null || passwordConfirm === "") {
    console.log("A confirmção da senha está vazia");
    const passwordConfirmError = document.getElementById("passwordConfirm-error");
    console.log(passwordConfirmError);
    passwordConfirmError.textContent = "A confirmação da senha é obrigatória.";
  }/*
});
