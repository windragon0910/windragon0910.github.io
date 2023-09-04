// function to set a theme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to change text based on theme
function setText() {
    const moon = "🌙";
    const sun = "☀️";
    const themeButton = document.getElementById("theme");
    const theme = localStorage.getItem('theme');
    if (theme === 'dark-theme') {
        themeButton.innerHTML = sun;
    } else {
        themeButton.innerHTML = moon;
    }
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark-theme'){
        setTheme('light-theme');
        setText();
    } else {
        setTheme('dark-theme');
        setText();
    }
}
(function () {
    if (localStorage.getItem('theme') === 'dark-theme') {
        setTheme('dark-theme');
    } else {
        setTheme('light-theme');
    }
})();