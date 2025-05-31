function getElementValueById(id) {
  const input = document.getElementById(id);
  return input.value;
}

function setInputError(id, text) {
  const inputError = document.getElementById(id);

  if (inputError) {
    inputError.textContent = text;
  }
}

function validateInput(elementId, elementErrorId, textError) {
  const inputValue = getElementValueById(elementId);

  if (inputValue === undefined || inputValue === null || inputValue === "") {
    setInputError(elementErrorId, textError);
  }
}

function validateForm() {
  const fields = [
    { fieldName: "name", messageError: "Nome é obrigatório." },
    { fieldName: "email", messageError: "E-mail é obrigatório." },
    { fieldName: "phone", messageError: "Telefone é obrigatório." },
    { fieldName: "password", messageError: "Senha é obrigatório." },
    {
      fieldName: "password-confirm",
      messageError: "A confirmação da senha é obrigatória.",
    },
  ];

  for (let i = 0; i < fields.length; i++) {
    const field = fields[i];
    const elementErrorId = `${field.fieldName}-error`;
    validateInput(field.fieldName, elementErrorId, field.messageError);
  }
}

const handleClick = (e) => {
  e.preventDefault();

  validateForm();
};

const button = document.querySelector("button");
button.addEventListener("click", handleClick);

//Usar abstração usando funções.
