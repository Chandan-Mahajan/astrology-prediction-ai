const form = document.getElementById("astrologyForm");
const statusText = document.getElementById("status");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Inputs
  const name = document.getElementById("name").value.trim();
  const dob = document.getElementById("dob").value;
  const time = document.getElementById("time").value;
  const gender = document.getElementById("gender").value;
  const focus = document.getElementById("focus").value;
  const email = document.getElementById("email").value.trim();

  // Errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("dobError").textContent = "";
  document.getElementById("focusError").textContent = "";
  document.getElementById("emailError").textContent = "";

  let valid = true;

  if (name.length < 2) {
    document.getElementById("nameError").textContent = "Enter a valid name";
    valid = false;
  }

  if (!dob) {
    document.getElementById("dobError").textContent = "Select date of birth";
    valid = false;
  }

  if (!focus) {
    document.getElementById("focusError").textContent = "Select area of focus";
    valid = false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email";
    valid = false;
  }

  if (!valid) return;

  submitBtn.disabled = true;
  statusText.textContent = "Sending request...";

  try {
    const formData = {
      name,
      dob,
      time,
      gender,
      focus,
      email,
    };
  
    const response = await fetch(
      "https://chandan-astrology.app.n8n.cloud/webhook/astrology-prediction",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
  
    if (!response.ok) {
      throw new Error("Request failed");
    }
  
    await response.text(); // IMPORTANT for n8n
  
    statusText.innerText =
      "Prediction request sent successfully! Check your email.";
    form.reset();
  } catch (error) {
    statusText.innerText =
      "Something went wrong. Please try again later.";
    console.error(error);
  } finally {
    submitBtn.disabled = false;
  }

});
