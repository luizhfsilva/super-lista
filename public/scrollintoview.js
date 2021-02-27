const form = document.getElementById('form');

form.addEventListener("focusin", (event) => {
    // event.target.style.background = 'pink';
    event.target.scrollIntoView();
});
