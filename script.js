/* Interacciones de la carta musical */
const openStoryButton = document.querySelector("#open-story");
const storySection = document.querySelector("#historia");
const letterSection = document.querySelector("#carta");
const revealButton = document.querySelector("#reveal-letter");
const finalLetter = document.querySelector("#final-letter");
const toast = document.querySelector("#toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.setTimeout(() => toast.classList.remove("visible"), 2400);
}

openStoryButton.addEventListener("click", () => {
  storySection.classList.add("is-visible");
  storySection.scrollIntoView({ behavior: "smooth", block: "start" });
});

revealButton.addEventListener("click", () => {
  const isOpen = revealButton.getAttribute("aria-expanded") === "true";
  revealButton.setAttribute("aria-expanded", String(!isOpen));
  finalLetter.hidden = isOpen;
  revealButton.querySelector(".letter-arrow").textContent = isOpen ? "＋" : "−";
  revealButton.querySelector("span:nth-child(2)").textContent = isOpen ? "Una carta para Héctor" : "Cerrar la cartita";
  if (!isOpen) {
    finalLetter.scrollIntoView({ behavior: "smooth", block: "nearest" });
    showToast("Un detallito hecho especialmente para ti ♡");
  }
});

// Revela las secciones de forma progresiva sin impedir el acceso si no hay IntersectionObserver.
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".hidden-section").forEach((section) => observer.observe(section));
} else {
  document.querySelectorAll(".hidden-section").forEach((section) => section.classList.add("is-visible"));
}

// Si el usuario llega directamente a #historia, no dejamos la sección oculta.
if (window.location.hash === "#historia" || window.location.hash === "#carta") {
  storySection.classList.add("is-visible");
  letterSection.classList.add("is-visible");
}
