AOS.init();
        
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
function setThemeMode(mode) {
    if (mode === "dark") {
        body.classList.add("dark-mode");
        themeToggle.innerHTML = '<i class="bi bi-sun"></i>';
        localStorage.setItem("theme", "dark");
    } else {
        body.classList.remove("dark-mode");
        themeToggle.innerHTML = '<i class="bi bi-moon"></i>';
        localStorage.setItem("theme", "light");
    }
}
themeToggle.addEventListener("click", () => {
    const currentMode = body.classList.contains("dark-mode") ? "light" : "dark";
    setThemeMode(currentMode);
});
if (localStorage.getItem("theme") === "dark") {
    setThemeMode("dark");
}

const jobTitles = ["Web Developer", "Data Analyst", "Game Developer"];
let titleIndex = 0, charIndex = 0, isDeleting = false;
function typeWriter() {
    const span = document.querySelector(".typewriter");
    const currentTitle = jobTitles[titleIndex];
    if (isDeleting) {
        span.textContent = currentTitle.substring(0, charIndex--);
    } else {
        span.textContent = currentTitle.substring(0, charIndex++);
    }
    if (!isDeleting && charIndex === currentTitle.length) {
        isDeleting = true;
        setTimeout(typeWriter, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % jobTitles.length;
        setTimeout(typeWriter, 500);
    } else {
        setTimeout(typeWriter, isDeleting ? 50 : 100);
    }
}
document.addEventListener("DOMContentLoaded", typeWriter);

function openModal(title, description, image, githubLink) {
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalDescription").textContent = description;
    document.getElementById("modalImage").src = image;
    let githubButton = document.getElementById("modalLink");
    githubButton.href = githubLink;
    githubButton.style.display = githubLink ? "inline-block" : "none";

    var projectModal = new bootstrap.Modal(document.getElementById("projectModal"));
    projectModal.show();
}