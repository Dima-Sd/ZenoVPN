document.addEventListener('DOMContentLoaded', () => {
    const langSwitcher = document.querySelector('[data-lang-switcher]');
    const langList = langSwitcher.nextElementSibling;
    langSwitcher.addEventListener('click', function (e) {
        e.stopPropagation();

        const isActive = langList.classList.toggle('active');
        this.classList.toggle('active', isActive);
    });
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.switcher-lang')) {
            langList.classList.remove('active');
            langSwitcher.classList.remove('active');
        }
    });

    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    menuBtnRef.addEventListener("click", () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;
        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);
        mobileMenuRef.classList.toggle("is-open");
    });

    const header = document.querySelector('[data-header]');
    const scrollThreshold = 300;
    window.addEventListener('scroll', () => {
        if (!header) return;
        if (window.scrollY >= scrollThreshold) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    });
});
