// ==========================================
// LOAD LOGGED-IN USER
// ==========================================

let user = JSON.parse(
    localStorage.getItem("loggedInUser")
);


// ==========================================
// DISPLAY USER
// ==========================================

if (user && user.email) {

    document.getElementById("profileName").textContent =
        "My Account";

    document.getElementById("profileEmail").textContent =
        user.email;

}
else {

    document.getElementById("profileName").textContent =
        "Guest User";

    document.getElementById("profileEmail").textContent =
        "Please log in to view your account";
}


// ==========================================
// EDIT PROFILE
// ==========================================

function editProfile() {

    if (!user) {

        alert("Please log in first.");

        window.location.href = "Profile.html";

        return;
    }

    let newEmail = prompt(
        "Enter your email:",
        user.email
    );

    if (newEmail === null || newEmail.trim() === "") {
        return;
    }

    user.email = newEmail.trim();

    // Save updated user
    localStorage.setItem(
        "loggedInUser",
        JSON.stringify(user)
    );

    document.getElementById("profileEmail").textContent =
        user.email;

    alert("Profile updated successfully!");
}


// ==========================================
// LOGOUT
// ==========================================

function logout() {

    let answer = confirm(
        "Are you sure you want to log out?"
    );

    if (answer) {

        // Remove logged-in user
        localStorage.removeItem("loggedInUser");

        alert("You have been logged out.");

        // Go to login page
        window.location.href = "login.html";
    }
}