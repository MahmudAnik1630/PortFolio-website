const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {
  // Toggle menu
  hamburger.addEventListener("click", () => {
    const isActive = navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", isActive);
  });

  // Close menu when clicking nav links
  const navLinks = navMenu.querySelectorAll("ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  // Close when clicking Hire Me button
  const hireMeBtn = navMenu.querySelector(".btn");
  if (hireMeBtn) {
    hireMeBtn.addEventListener("click", () => {
      closeMenu();
    });
  }

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu();
    }
  });

  // Close on resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 920) {
      closeMenu();
    }
  });

  // Reusable function
  function closeMenu() {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", false);
  }
}
function sendMail() {
  const name = document.querySelector('input[name="name"]').value;
  const phone = document.querySelector('input[name="phone"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  const subject = encodeURIComponent("Portfolio Contact");
  const body = encodeURIComponent(
    "Name: " +
      name +
      "\n" +
      "Phone: " +
      phone +
      "\n\n" +
      "Message:\n" +
      message,
  );

  window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=mahmudulhasananik40@gmail.com&su=${subject}&body=${body}`;
}