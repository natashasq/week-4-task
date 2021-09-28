const button = document.querySelector(".page__form-btn");
const input = document.querySelector(".page__form-input");
const form = document.querySelector(".page__form");

button.addEventListener("click", e => {
  let message = document.querySelector(".page__form-message");
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  let p = document.createElement("p");

  if (message) {
    message.remove();
  }

  if (input.value === "") {
    e.preventDefault();
    let text = document.createTextNode("Oops! Please add your email");
    p.classList.add("page__form-message");
    p.appendChild(text);
    form.append(p);
    return;
  }

  if (!input.value.match(validRegex)) {
    e.preventDefault();
    let text = document.createTextNode("Ooops! Please, check your email");
    p.classList.add("page__form-message");
    p.appendChild(text);
    form.append(p);
  }
});
