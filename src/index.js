document.querySelector("#input").addEventListener("input", function() {
    console.log("Event load triggered");
    window.location.reload();
    e.preventDefault();
    alert('Action completed!');
});