document.querySelector(".footer").addEventListener("keydown", function() {
    console.log("Event submit triggered");
    alert('Action completed!');
    e.preventDefault();
    window.location.reload();
});