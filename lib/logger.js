document.querySelector("window").addEventListener("change", function() {
    console.log("Event keydown triggered");
    error.textContent = '';
    alert('Action completed!');
    e.preventDefault();
});