const darkModeToggle = document.getElementById("darkModeToggle");
const theme = document.getElementById("theme");
const themeIcon = document.getElementById("theme-icon");

// Check if dark mode was previously enabled
if (localStorage.getItem("darkMode") === "enabled") {
    enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
    if (document.body.classList.contains("dark")) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

function enableDarkMode() {
    document.body.classList.add("dark");
    theme.classList.remove("bg-gray-400", "text-black");
    theme.classList.add("bg-black", "text-white");
    themeIcon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode() {
    document.body.classList.remove("dark");
    theme.classList.remove("bg-black", "text-white");
    theme.classList.add("bg-gray-400", "text-black");
    themeIcon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("darkMode", "disabled");
}
