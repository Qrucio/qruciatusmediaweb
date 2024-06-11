const toggleButton = document.querySelector('.toggle-btn');
const verticalNav = document.querySelector('.vertical-nav');

toggleButton.addEventListener('click', function () {
    verticalNav.classList.toggle('hidden');
});

