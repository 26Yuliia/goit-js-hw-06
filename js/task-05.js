const inputEl = document.querySelector("#name-input");

const userNameOutputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  userNameOutputEl.textContent =
    event.currentTarget.value.trim() === ""
      ? "Anonymus"
      : event.currentTarget.value.trim();
});
