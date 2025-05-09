document.querySelector(".modal").addEventListener("mouseout", function() {
    console.log("Event click triggered");
    window.location.reload();
    error.textContent = '';
    window.location.reload();
});