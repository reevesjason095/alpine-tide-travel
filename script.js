// Target date: August 23, 2026 at 11:00 AM Eastern Time
const cruiseDate = new Date("2026-08-23T11:00:00-04:00");

function updateBannerText() {
    const marqueeElement = document.getElementById("countdownMarqueeText");
    if (marqueeElement) {
        marqueeElement.textContent = '"Alpine Tide Travel is an Independent Affiliate of WorldVia Travel Network"';
    }
}

function updateCountdown() {
    const timerElement = document.getElementById("timer");
    const difference = cruiseDate - new Date();

    if (!timerElement) return;

    if (difference <= 0) {
        timerElement.textContent = "Countdown complete - sailing day is here!";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
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
        second: "2-digit",
        hour12: true
    };

    const easternTime = now.toLocaleString("en-US", dateTimeOptions);
    clockElement.innerHTML = `Current Local Time: ${easternTime} ET`;
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function toggleTopButton() {
    const topButton = document.getElementById("backToTopBtn");
    if (!topButton) return;

    const shouldShow = window.scrollY > 300 || document.documentElement.scrollTop > 300;
    topButton.style.setProperty("display", shouldShow ? "flex" : "none", "important");
}

function initMobileMenu() {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (!menuToggle || !navLinks) return;

    function toggleMenu() {
        navLinks.classList.toggle("show");
        const expanded = navLinks.classList.contains("show");
        menuToggle.setAttribute("aria-expanded", expanded ? "true" : "false");
        menuToggle.innerHTML = expanded
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    }

    menuToggle.addEventListener("click", toggleMenu);

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768 && navLinks.classList.contains("show")) {
                toggleMenu();
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    updateBannerText();
    updateCountdown();
    updateLocalClock();
    toggleTopButton();
    initMobileMenu();

    setInterval(updateCountdown, 1000);
    setInterval(updateLocalClock, 1000);
});

window.addEventListener("scroll", toggleTopButton);
