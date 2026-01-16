document.querySelector("window").addEventListener("resize", function() {
    console.log("Event resize triggered");
    e.preventDefault();
    window.location.reload();
    alert('Action completed!');
});