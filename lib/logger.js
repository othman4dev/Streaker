document.querySelector("window").addEventListener("change", function() {
    console.log("Event scroll triggered");
    error.textContent = '';
    window.location.reload();
    e.preventDefault();
});