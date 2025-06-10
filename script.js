document.addEventListener("DOMContentLoaded", () => {
  // Dropdown menu
  const dropdown = document.querySelector(".dropdown");
  if (dropdown) {
    const dropdownMenu = dropdown.querySelector(".dropdown-menu");

    dropdown.addEventListener("mouseenter", () => {
      dropdownMenu.style.display = "block";
    });

    dropdown.addEventListener("mouseleave", () => {
      dropdownMenu.style.display = "none";
    });
  }

  // Responsive navbar
  const hamburger = document.querySelector(".hamburger");
  const navRight = document.querySelector(".nav-right");

  if (hamburger && navRight) {
    hamburger.addEventListener("click", () => {
      navRight.classList.toggle("show");
    });
  }
});
