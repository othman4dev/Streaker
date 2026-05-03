document.querySelector("header").addEventListener("keydown", function() {
    console.log("Event scroll triggered");
    alert('Action completed!');
    window.location.reload();
    error.textContent = '';
});