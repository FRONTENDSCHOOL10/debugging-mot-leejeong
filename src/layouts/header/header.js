import './header.scss';

// header.js
document.addEventListener('DOMContentLoaded', () => {
    const profileBtn = document.querySelector('.profile-btn');
    const profileDropdown = document.querySelector('.header__profile-dropdown');

    profileBtn.addEventListener('click', () => {
        const isExpanded = profileBtn.getAttribute('aria-expanded') === 'true';
        profileBtn.setAttribute('aria-expanded', !isExpanded);
        profileDropdown.setAttribute('aria-hidden', isExpanded);
    });

    document.addEventListener('click', (event) => {
        if (!profileBtn.contains(event.target) && !profileDropdown.contains(event.target)) {
            profileBtn.setAttribute('aria-expanded', false);
            profileDropdown.setAttribute('aria-hidden', true);
        }
    });
});
