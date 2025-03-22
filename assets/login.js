function validateLogin() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var passwordError = document.getElementById("password-error");

    if (name === "" || email === "" || password === "") {
        alert("All fields are required!");
        return;
    }

    if (password.length < 6) {
        passwordError.style.display = "block"; // Show error message
        return;
    } else {
        passwordError.style.display = "none"; // Hide error message if password is valid
    }

    // If everything is valid, proceed to login
    alert("Login Successful!");
    localStorage.setItem("loggedIn", "true"); // Store login status
    window.location.href = "product.html"; // Redirect to Product Page
}