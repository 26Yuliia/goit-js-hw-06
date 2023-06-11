const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", () => {
  if (inputEl.value.length == 6) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else if (inputEl.value.length != 6) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
});
