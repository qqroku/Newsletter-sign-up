const emailInput = document.getElementById("email");
const formBtn = document.getElementById("form-btn");
const emailPattern = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/i;

emailInput.addEventListener("input", (e) => {
  if (!e.target.checkValidity()) {
    e.target.reportValidity();
  }
});

formBtn.addEventListener("click", () => {
  const match = emailPattern.test(emailInput.value);

  if (match) {
    console.log("to be continued...");
  }
});
