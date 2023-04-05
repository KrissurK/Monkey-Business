document.querySelectorAll('button[href]').forEach((item) => {
    item.addEventListener('click', (event) => {
        console.log(event.target);
        location.href=event.target.getAttribute('href');
    });
});