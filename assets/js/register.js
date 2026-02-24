document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("user_name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const terms = document.getElementById("terms").checked;

    if (!name || !email || !password) {
      swal("Error", "All fields are required!", "error");
      return;
    }

    if (!terms) {
      swal("Warning", "Please agree to Terms & Conditions", "warning");
      return;
    }

    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem("yummyUser", JSON.stringify(user));

    swal("Success!", "Registration successful!", "success").then(() => {
      window.location.href = "login.html";
    });
  });
