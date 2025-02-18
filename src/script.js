let form = document.getElementById("form");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btn = document.getElementById("btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validation();
});

const setError = (ele, msg) => {
  let box = ele.parentElement;
  let error = box.querySelector(".error");

  error.innerText = msg;
  box.classList.add("error");
  box.classList.remove("success");
};

const setSuccess = (ele) => {
  let box = ele.parentElement;
  let error = box.querySelector(".error");

  error.innerText = "";
  box.classList.add("success");
  box.classList.remove("error");
};

const mailFormat = (e) => {
  const re = /\w+@\w+.\w+/;
  return re.test(String(e).toLowerCase());
};

const passFormat = (p) => {
  const re = /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{8,96}$/gmu;
  return re.test(p);
};

function validation() {
  let mail = email.value.trim();
  let pass1 = password.value.trim();

 

  if (mail === "") {
    setError(email, "Email is required");
  } else if (!mailFormat(mail)) {
    setError(email, "Please enter a valid email");
  } else {
    setSuccess(email);
  }

  if (pass1 === "") {
    setError(password, "Password is required");
  } else if (!passFormat(pass1)) {
    setError(password, "Password must be a minimum of 8 characters including number, Upper, Lower And one special character");
  } else {
    setSuccess(password);
  }

  // If no errors, store the data and show a success message
  if (document.querySelectorAll(".success").length === 2) {
    localStorage.setItem("Email", mail);
    localStorage.setItem("Password", pass1);
    alert("Registration successful!");
  }
}
