document.querySelector("#button").addEventListener("resize", function() {
    console.log("Event click triggered");
    window.location.reload();
    alert('Action completed!');
    window.location.reload();
});