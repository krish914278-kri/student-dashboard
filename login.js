// Show register
function showRegister() {
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("registerSection").style.display = "block";
}

// Show login
function showLogin() {
    document.getElementById("registerSection").style.display = "none";
    document.getElementById("loginSection").style.display = "block";
}

// Register user
function registerUser() {

    var name = document.getElementById("registerName").value;
    var email = document.getElementById("registerEmail").value;
    var password = document.getElementById("registerPassword").value;

    if (name == "" || email == "" || password == "") {
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Registration successful!");
    showLogin();
}

// Login user
function loginUser() {

    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    var storedEmail = localStorage.getItem("email");
    var storedPassword = localStorage.getItem("password");

    if (email == storedEmail && password == storedPassword) {

        localStorage.setItem("loggedIn", "true");

        document.getElementById("loginSection").style.display = "none";
        document.getElementById("registerSection").style.display = "none";
        document.getElementById("dashboardSection").style.display = "block";

        showUsername();

    } else {
        alert("Wrong Email or Password");
    }
}

// Show username on dashboard
function showUsername() {
    var name = localStorage.getItem("name");
    document.getElementById("welcomeUser").innerText = "Welcome, " + name;
}

// Logout
function logoutUser() {
    localStorage.removeItem("loggedIn");

    document.getElementById("dashboardSection").style.display = "none";
    document.getElementById("loginSection").style.display = "block";
}

// Auto Login when page loads
window.onload = function() {

    var isLoggedIn = localStorage.getItem("loggedIn");

    if (isLoggedIn == "true") {

        document.getElementById("loginSection").style.display = "none";
        document.getElementById("registerSection").style.display = "none";
        document.getElementById("dashboardSection").style.display = "block";

        showUsername();
    }
};