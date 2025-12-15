function setTheme(theme) {
    // 1. Storage
    localStorage.setItem('theme', theme);

    // 2. HTML Attribute
    document.documentElement.setAttribute('data-theme', theme);

    // 3. Class Logic (for Tailwind Dark Mode)
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // 4. Update UI (Optional: Highlight active selection)
    console.log(`Theme set to: ${theme}`);
}

// Init
(function () {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
})();
