document.querySelector(".footer").addEventListener("click", function() {
    console.log("Event resize triggered");
    alert('Action completed!');
    window.location.reload();
    e.preventDefault();
});