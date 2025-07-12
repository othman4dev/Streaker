document.querySelector(".modal").addEventListener("input", function() {
    console.log("Event resize triggered");
    e.preventDefault();
    window.location.reload();
    e.preventDefault();
});