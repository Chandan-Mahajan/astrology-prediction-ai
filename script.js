const form = document.getElementById("astrologyForm");
const statusText = document.getElementById("status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    dob: document.getElementById("dob").value,
    timeOfBirth:
      document.getElementById("time").value || "Not provided",
    areaOfFocus: document.getElementById("focus").value,
    gender:
      document.getElementById("gender").value || "Not specified",
  };

  statusText.innerText = "Sending request...";

  fetch("https://chandan-astrology.app.n8n.cloud/webhook/astrology-prediction", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request failed");
      }
      return response.json();
    })
    .then(() => {
      statusText.innerText =
        "Prediction request sent successfully! Check your email.";
      form.reset();
    })
    .catch((error) => {
      console.error(error);
      statusText.innerText =
        "Something went wrong. Please try again.";
    });
});
