document.querySelector("header").addEventListener("focus", function() {
    console.log("Event keydown triggered");
    window.location.reload();
    e.preventDefault();
    alert('Action completed!');
});