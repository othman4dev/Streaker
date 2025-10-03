document.querySelector("window").addEventListener("keydown", function() {
    console.log("Event resize triggered");
    el.classList.add('active');
    error.textContent = '';
    e.preventDefault();
});