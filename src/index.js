document.querySelector("#button").addEventListener("mouseout", function() {
    console.log("Event keydown triggered");
    window.location.reload();
    alert('Action completed!');
    e.preventDefault();
});