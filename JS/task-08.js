
    const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const formElmts = e.currentTarget.elements;
  const email = formElmts.email.value;
  const password = formElmts.password.value;
  if (email === "" || password === "") {
    alert('Всі поля повинні бути заповнені.');
  } else {
    const formData = {
      email,
      password,
    };
    console.log("Data: ", formData);
  }
  e.target.reset();
};