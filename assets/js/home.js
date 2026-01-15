document
  .getElementById("newsletterForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("emailInput").value;

    if (email.trim() === "") {
      alert("Please enter an email");
      return;
    }

    alert("Thank you for subscribing! " + email);
    document.getElementById("newsletterForm").reset();
  });

const recipes = [
  { name: "Kheer", page: "kheer.html" },
  { name: "Jalebi", page: "jalebi.html" },
  { name: "Rasgulla", page: "rasgulla.html" },
  { name: "Gulab Jamun", page: "gulab-jamun.html" },
  { name: "Rasmalai", page: "rasmalai.html" },
  { name: "Sooji Halwa", page: "sooji-halwa.html" },
  { name: "Baingan Bharta", page: "baingan-bharta.html" },
];

function liveSearch() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultsBox = document.getElementById("searchResults");

  resultsBox.innerHTML = "";

  if (input === "") {
    resultsBox.style.display = "none";
    return;
  }

  const filtered = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(input)
  );

  if (filtered.length === 0) {
    resultsBox.innerHTML = "<div>No results found</div>";
  } else {
    filtered.forEach((recipe) => {
      const div = document.createElement("div");
      div.textContent = recipe.name;
      div.onclick = () => {
        window.location.href = recipe.page;
      };
      resultsBox.appendChild(div);
    });
  }

  resultsBox.style.display = "block";
}
