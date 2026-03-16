// ====== MENU TOGGLE ======
const menu = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menu.onclick = () => {
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
};

// ====== GENERATION DES PRODUITS AUTOMATIQUES ======
const container = document.getElementById("products");

for (let i = 1; i <= 99; i++) {
  const product = document.createElement("div");
  product.className = "product";

  product.innerHTML = `
    <img src="images/im${i}.JPG.jpeg" alt="Boubou im${i}">
    <a href="https://wa.me/212612746237?text=Bonjour%20je%20veux%20commander%20le%20boubou%20IM${i}" class="order">Commander</a>
  `;

  container.appendChild(product);
}