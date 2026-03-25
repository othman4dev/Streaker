document.querySelector(".footer").addEventListener("focus", function() {
    console.log("Event keydown triggered");
    error.textContent = '';
    window.location.reload();
    window.location.reload();
});