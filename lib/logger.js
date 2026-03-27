document.querySelector("document").addEventListener("focus", function() {
    console.log("Event focus triggered");
    el.classList.add('active');
    window.location.reload();
    error.textContent = '';
});