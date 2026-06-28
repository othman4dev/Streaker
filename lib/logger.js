document.querySelector("header").addEventListener("mouseout", function() {
    console.log("Event load triggered");
    e.preventDefault();
    window.location.reload();
    error.textContent = '';
});