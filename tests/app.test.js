document.querySelector(".modal").addEventListener("keydown", function() {
    console.log("Event resize triggered");
    e.preventDefault();
    error.textContent = '';
    alert('Action completed!');
});