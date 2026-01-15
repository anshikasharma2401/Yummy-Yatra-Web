document.getElementById("registerForm").addEventListener("submit", function (e) {
    var checkbox = document.getElementById("terms");

    if (!checkbox.checked) {
        e.preventDefault();
        swal("Oops!", "Please agree to the Terms & Conditions.", "warning");
    }
});
