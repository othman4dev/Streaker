document.querySelector("form").addEventListener("submit", function() {
    console.log("Event scroll triggered");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
});