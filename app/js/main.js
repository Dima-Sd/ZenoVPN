document.addEventListener('DOMContentLoaded', () => {
    const langSwitcher = document.querySelector('[data-lang-switcher]');
    const langList = langSwitcher.nextElementSibling;

    // Відкриття / закриття по кнопці
    langSwitcher.addEventListener('click', function (e) {
        e.stopPropagation();

        const isActive = langList.classList.toggle('active');
        this.classList.toggle('active', isActive);
    });

    // Клік по екрану — закриваємо список
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.switcher-lang')) {
            langList.classList.remove('active');
            langSwitcher.classList.remove('active');
        }
    });
});
