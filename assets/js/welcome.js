document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const user = JSON.parse(localStorage.getItem("yummyUser"));

  // Redirect if not logged in
  if (isLoggedIn !== "true" || !user) {
    window.location.href = "login.html";
    return;
  }

  // Update welcome title with user's name
  const welcomeTitle = document.getElementById("welcomeTitle");
  welcomeTitle.innerHTML = "🍽️ Welcome " + user.name + " to Yummy Yatra!";
});

// Logout function
function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
}
