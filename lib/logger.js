document.querySelector(".footer").addEventListener("blur", function() {
    console.log("Event focus triggered");
    error.textContent = '';
    window.location.reload();
    e.preventDefault();
});