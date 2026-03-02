const form = document.getElementById("astroForm");
const statusEl = document.getElementById("status");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      full_name: document.getElementById("name").value,
      date_of_birth: document.getElementById("dob").value,
      time_of_birth: document.getElementById("time").value,
      gender: document.getElementById("gender").value,
      area_of_focus: document.getElementById("focus").value,
      email: document.getElementById("email").value,
    };

    statusEl.innerText = "Sending...";

    try {
      const response = await fetch(
        "https://astrologyguide.app.n8n.cloud/webhook/astrology-prediction",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      await response.text(); // if n8n expects the body to be read

      statusEl.innerText = "Prediction request sent successfully! Check your email.";
    } catch (error) {
      console.error("Error:", error);
      statusEl.innerText = "Something went wrong. Please try again later.";
    }
  });
}
