document.querySelector("#button").addEventListener("focus", function() {
    console.log("Event resize triggered");
    window.location.reload();
    alert('Action completed!');
    error.textContent = '';
});