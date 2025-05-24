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

  if (name === undefined || name === null || name === "") {
    console.log("Name está vazio");
    const nameError = document.getElementById("name-error");
    console.log(nameError);
    nameError.textContent = "Nome é obrigatório.";
  }
});
