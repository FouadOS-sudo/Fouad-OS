/* Update this value with the public URL of your release before deploying. */
const DOWNLOAD_URL = "downloads/fouad-os-live-2026.09.09-x86_64.iso";

document.querySelectorAll("[data-download]").forEach((link) => {
  link.href = DOWNLOAD_URL;
});

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

toggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("is-open");
  toggle?.setAttribute("aria-expanded", "false");
}));
