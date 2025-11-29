const emailInput = document.getElementById("email");
const formBtn = document.getElementById("form-btn");
const emailPattern = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/i;

const labelErrorMsg = document.getElementById("label-errorMsg");
const errorMsg = document.querySelector(".newsletter-card__form-errorMsg");

const newsletterCard = document.getElementById("newsletter-card");
const successCard = document.getElementById("success-card");

const dismissBtn = document.getElementById("dismiss-btn");

emailInput.addEventListener("input", (e) => {
  if (!e.target.checkValidity()) {
    e.target.reportValidity();
  }
});

formBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const match = emailPattern.test(emailInput.value);

  if (match) {
    newsletterCard.style.display = "none";
    successCard.style.display = "flex";
  } else {
    labelErrorMsg.style.display = "flex";
    labelErrorMsg.style.flexDirection = "row";
    labelErrorMsg.style.justifyContent = "space-between";
    errorMsg.textContent = "Valid email required";
    errorMsg.style.fontSize = "0.6rem";
    errorMsg.style.fontWeight = "700";
    errorMsg.style.color = "red";
    emailInput.style.color = "red";
    emailInput.style.borderColor = "red";
  }
});

dismissBtn.addEventListener("click", () => {
  successCard.style.display = "none";
  newsletterCard.style.display = "flex";
});
