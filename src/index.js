document.querySelector(".footer").addEventListener("focus", function() {
    console.log("Event resize triggered");
    error.textContent = '';
    alert('Action completed!');
    error.textContent = '';
});