// Optional JS if you want a mobile toggle or dropdown enhancement
document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".dropdown");
  const dropdownMenu = dropdown.querySelector(".dropdown-menu");

  dropdown.addEventListener("mouseenter", () => {
    dropdownMenu.style.display = "block";
  });

  dropdown.addEventListener("mouseleave", () => {
    dropdownMenu.style.display = "none";
  });
});
