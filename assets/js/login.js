document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("emailInput").value.trim();
  const password = document.getElementById("passwordInput").value.trim();

  const storedUser = JSON.parse(localStorage.getItem("yummyUser"));

  if (!storedUser) {
    swal("Error", "No user found. Please register first.", "error");
    return;
  }

  if (email === storedUser.email && password === storedUser.password) {
    localStorage.setItem("isLoggedIn", "true");

    swal("Success!", "Login successful!", "success").then(() => {
      window.location.href = "welcome.html";
    });
  } else {
    swal("Error", "Invalid credentials", "error");
  }
});
