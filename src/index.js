import "./scss/main.scss";

const navBtn = document.querySelector('.js-nav-btn');
const scrollLinks = document.querySelectorAll('.js-scroll-link');

scrollLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = e.target;
        const scroll = function () {
            document.querySelector(target.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        };
        if (navBtn.checked) {
            navBtn.checked = false;
            window.setTimeout(scroll, 600);
        } else {
            scroll();
        }


    });
});