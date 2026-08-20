function login(event) {

    // Stop form from refreshing the page
    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let msg = document.getElementById("msg");

    // Clear message
    msg.innerHTML = "";

    // Get registered users
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Find matching email and password
    let user = users.find(function(user) {

        return user.email.toLowerCase() === email.toLowerCase()
            && user.password === password;

    });

    // LOGIN SUCCESS
    if (user) {

        msg.style.color = "green";
        msg.innerHTML = "Login successful!";

        // Save logged-in user
        localStorage.setItem(
            "loggedInUser",
            JSON.stringify(user)
        );

        // Open index.html after 1 second
        setTimeout(function() {
            window.location.href = "./homepage.html";
        }, 1000);

    }

    // LOGIN FAILED
    else {

        msg.style.color = "red";
        msg.innerHTML = "Invalid email or password. Please try again.";

    }
}