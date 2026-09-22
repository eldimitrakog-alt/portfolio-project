document.getElementById("year").textContent = new Date().getFullYear();

const navLinks = document.querySelectorAll("#navMenu .nav-link");
const navCollapseEl = document.getElementById("navMenu");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navCollapseEl.classList.contains("show")) {
      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navCollapseEl);
      bsCollapse.hide();
    }
  });
});
