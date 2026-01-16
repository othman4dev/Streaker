document.querySelector("document").addEventListener("mouseout", function() {
    console.log("Event resize triggered");
    error.textContent = '';
    alert('Action completed!');
    error.textContent = '';
});