document.querySelector(".container").addEventListener("mouseout", function() {
    console.log("Event change triggered");
    window.location.reload();
    alert('Action completed!');
    e.preventDefault();
});