const form = document.getElementById("astrologyForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const dob = document.getElementById("dob").value;
  const placeFocus = document.getElementById("focus").value;
  const email = document.getElementById("email").value.trim();

  const nameError = document.getElementById("nameError");
  const dobError = document.getElementById("dobError");
  const focusError = document.getElementById("focusError");
  const emailError = document.getElementById("emailError");

  // Clear previous errors
  nameError.textContent = "";
  dobError.textContent = "";
  focusError.textContent = "";
  emailError.textContent = "";

  let isValid = true;

  // Name validation
  if (name.length < 2) {
    nameError.textContent = "Please enter a valid full name.";
    isValid = false;
  }

  // DOB validation
  if (!dob) {
    dobError.textContent = "Please select your date of birth.";
    isValid = false;
  }

  // Focus validation
  if (!placeFocus) {
    focusError.textContent = "Please select an area of focus.";
    isValid = false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  // Final check
  if (isValid) {
    console.log("Validation passed");
    alert("Form validated successfully. Ready to send data to n8n.");
    form.reset();
  }  
});
