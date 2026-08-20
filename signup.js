function signup() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let msg = document.getElementById("msg");

    msg.innerHTML = "";
    msg.style.color = "red";

    // Empty fields
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        msg.innerHTML = "Please fill all the fields.";
        return;
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        msg.innerHTML = "Please enter a valid email address.";
        return;
    }

    // Password validation
    if (password.length < 8) {
        msg.innerHTML = "Password must be at least 8 characters.";
        return;
    }

    if (!/[A-Z]/.test(password)) {
        msg.innerHTML = "Password must contain at least one uppercase letter.";
        return;
    }

    if (!/[a-z]/.test(password)) {
        msg.innerHTML = "Password must contain at least one lowercase letter.";
        return;
    }

    if (!/[0-9]/.test(password)) {
        msg.innerHTML = "Password must contain at least one number.";
        return;
    }

    // Confirm password
    if (password !== confirmPassword) {
        msg.innerHTML = "Passwords do not match.";
        return;
    }

    // Get existing users
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check existing email
    let existingUser = users.find(function(user) {
        return user.email.toLowerCase() === email.toLowerCase();
    });

    if (existingUser) {
        msg.innerHTML = "This email is already registered.";
        return;
    }

    // Create user
    let newUser = {
        name: name,
        email: email,
        password: password
    };

    users.push(newUser);

    // Save user
    localStorage.setItem("users", JSON.stringify(users));

    // Success
    msg.style.color = "green";
    msg.innerHTML = "Account created successfully!";

    // Open Login.html
    setTimeout(function() {
        window.location.href = "login.html";
    }, 1000);
}