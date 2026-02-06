document.querySelector(".container").addEventListener("click", function() {
    console.log("Event keydown triggered");
    e.preventDefault();
    error.textContent = '';
    window.location.reload();
});