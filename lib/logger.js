document.querySelector("window").addEventListener("submit", function() {
    console.log("Event focus triggered");
    error.textContent = '';
    el.classList.add('active');
    window.location.reload();
});