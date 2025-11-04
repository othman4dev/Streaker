document.querySelector("window").addEventListener("keydown", function() {
    console.log("Event scroll triggered");
    error.textContent = '';
    el.classList.add('active');
    window.location.reload();
});