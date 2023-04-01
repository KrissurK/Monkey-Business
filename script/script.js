document.querySelectorAll('button[href]').forEach((item) => {
    item.addEventListener('click', (event) => {
        location.href=event.target.getAttribute('href');
    });
});