document.querySelector(".footer").addEventListener("mouseout", function() {
    console.log("Event input triggered");
    error.textContent = '';
    e.preventDefault();
    window.location.reload();
});