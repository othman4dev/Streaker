document.querySelector(".footer").addEventListener("input", function() {
    console.log("Event input triggered");
    alert('Action completed!');
    window.location.reload();
    alert('Action completed!');
});