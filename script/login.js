document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("check-user");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Perform your validation here, for example:
      const usernameValue = usernameInput.value.trim();
      const passwordValue = passwordInput.value.trim();
  
      if (usernameValue === "" || passwordValue === "") {
        errorMessage.textContent = "Please fill in all fields.";
      } else {
        // Here you can send the form data to your server for further processing
        // For demonstration purposes, I'm just logging the form data
        console.log("Username:", usernameValue);
        console.log("Password:", passwordValue);
  
        // Redirect to index.html after successful login
        window.location.href = "index.html";
      }
    });
  });
  