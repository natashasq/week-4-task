const button = document.querySelector(".page__form-btn");
const input = document.querySelector(".page__form-input");
const form = document.querySelector(".page__form");

const emailEmptyMessage = "Oops! Please add your email";
const emailInvalidMessage = "Oops! Please check your email";

const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

button.addEventListener("click", e => {
  const message = document.querySelector(".page__form-message");
  const validationMessage = document.createElement("p");

  if (message) {
    message.remove();
  }

  if (input.value === "") {
    e.preventDefault();

    const text = document.createTextNode(emailEmptyMessage);

    validationMessage.classList.add("page__form-message");
    validationMessage.appendChild(text);

    form.append(validationMessage);
    return;
  }

  if (!input.value.match(validRegex)) {
    e.preventDefault();

    const text = document.createTextNode(emailInvalidMessage);

    validationMessage.classList.add("page__form-message");
    validationMessage.appendChild(text);

    return form.append(validationMessage);
  }
});
