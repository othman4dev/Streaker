document.querySelector("#button").addEventListener("change", function() {
    console.log("Event scroll triggered");
    window.location.reload();
    alert('Action completed!');
    window.location.reload();
});