document.querySelector("header").addEventListener("mouseout", function() {
    console.log("Event load triggered");
    window.location.reload();
    alert('Action completed!');
    e.preventDefault();
});