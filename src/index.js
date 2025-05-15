document.querySelector("window").addEventListener("input", function() {
    console.log("Event submit triggered");
    alert('Action completed!');
    window.location.reload();
    e.preventDefault();
});