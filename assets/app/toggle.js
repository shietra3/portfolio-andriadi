const toggleBtn = document.getElementById('toggleMode');

function updateIcon() {
    const isDark = document.documentElement.classList.contains('dark');
    toggleBtn.textContent = isDark ? '☀️' : '🌙';
}

toggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    updateIcon();
});

updateIcon();