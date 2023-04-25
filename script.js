const password = document.querySelector("#password");

const error = document.querySelector("#err");

const confirmPass = document.querySelector("#confirmPassword");
confirmPass.addEventListener("keyup", (e) => {
  if (password.value == confirmPass.value) {
    error.className = "valid";
  } else {
    error.classList.remove("valid");
  }
});

function validate() {}
