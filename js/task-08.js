const formElement = document.querySelector(".login-form");

formElement.addEventListener("submit", handlerSubmit);

const profile = {};

function handlerSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;

  if (email.value === "" || password.value === "") {
    event.preventDefault();
    alert("All fields must be filled!");
  } else {
    profile.email = email.value;
    profile.password = password.value;

    formElement.reset();
    console.log(profile);
  }
}
