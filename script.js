/* ==========================================================================
   SENSORY-FRIENDLY & ACCESSIBLE SITE ARCHITECTURE
   ========================================================================== */

function updateBannerText() {
    const marqueeElement = document.getElementById("countdownMarqueeText");
    if (marqueeElement) {
        marqueeElement.textContent = "We are now proud to partner with WorldVia Travel Network!";
    }
}

function updateLocalClock() {
    const clockElement = document.getElementById("currentTime");
    if (!clockElement) return;

    const now = new Date();
    const dateTimeOptions = {
        timeZone: "America/New_York",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        // Sensory Update: Removed seconds to eliminate constant flickering visual movement
        hour12: true
    };

    const easternTime = now.toLocaleString("en-US", dateTimeOptions);
    clockElement.textContent = `Current Local Time: ${easternTime} ET`;
}

function runCentralLayoutTick() {
    updateLocalClock();
}

const topButton = document.getElementById("backToTopBtn");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function toggleTopButton() {
    if (!topButton) return;
    const shouldShow = window.scrollY > 300 || document.documentElement.scrollTop > 300;
    
    // Accessibility Update: Toggles visibility while ensuring keyboard tabbing ignores hidden buttons
    if (shouldShow) {
        topButton.style.display = "flex";
        topButton.removeAttribute("tabindex");
    } else {
        topButton.style.display = "none";
        topButton.setAttribute("tabindex", "-1");
    }
}

function toggleMenu() {
    if (!menuToggle || !navLinks) return;
    const isOpen = navLinks.classList.toggle("show");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    
    // Accessibility Update: Included clear screen-reader fallback labels alongside the visual icons
    menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i><span class="sr-only">Close navigation menu</span>'
        : '<i class="fa-solid fa-bars" aria-hidden="true"></i><span class="sr-only">Open navigation menu</span>';
}

if (menuToggle) {
    menuToggle.addEventListener("click", toggleMenu);
}

if (navLinks) {
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768) toggleMenu();
        });
    });
}

window.addEventListener("scroll", toggleTopButton);
window.addEventListener("load", toggleTopButton);

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "auto" // Retained: Instant scroll prevents jarring vestibular movement
    });
}

// Initial Run
updateBannerText();
runCentralLayoutTick();

// Sensory Update: Reduced polling frequency to 60000ms (1 minute) to avoid background thread processing noise
setInterval(runCentralLayoutTick, 60000);

