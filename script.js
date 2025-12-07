// ==== CONFIG: relationship start date ====
const relationshipStart = new Date(2025, 9, 10); // 10 Oct 2025 (month is 0-based)

// ====== NAVIGATION BETWEEN "PAGES" ======
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-link");
const primaryButtons = document.querySelectorAll(".primary-btn[data-section]");

function showSection(id) {
  sections.forEach((sec) => {
    sec.classList.toggle("active", sec.id === id);
  });

  navLinks.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.section === id);
  });

  // smooth scroll to top of main container
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Nav bar clicks
navLinks.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.section;
    if (target) showSection(target);
  });
});

// Buttons inside cards that navigate (like "Read your letter")
primaryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.section;
    if (target) showSection(target);
  });
});

// ====== DAYS TOGETHER & LINES OF CODE ======
function updateDaysTogether() {
  const daysEl = document.getElementById("daysCount");
  if (!daysEl || isNaN(relationshipStart.getTime())) return;

  const today = new Date();
  const diffTime = today.getTime() - relationshipStart.getTime();
  const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (days > 0) {
    daysEl.textContent = `${days} days`;
  } else {
    daysEl.textContent = "0 days";
  }
}

function updateLinesOfCode() {
  const linesEl = document.getElementById("linesCount");
  if (!linesEl) return;

  const fullHTML = document.documentElement.outerHTML;
  const lines = fullHTML.split("\n").length;
  linesEl.textContent = `${lines} lines`;
}

updateDaysTogether();
updateLinesOfCode();

// ====== LOVE BUTTON INTERACTION ======
const loveBtn = document.getElementById("loveBtn");
const confirmText = document.getElementById("confirmText");

if (loveBtn && confirmText) {
  loveBtn.addEventListener("click", () => {
    loveBtn.textContent = "Love confirmed ✅";
    confirmText.textContent =
      "I already knew it, but seeing you tap this still makes me happier than you think.";
  });
}
