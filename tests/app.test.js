document.querySelector("form").addEventListener("click", function() {
    console.log("Event mouseout triggered");
    alert('Action completed!');
    window.location.reload();
    e.preventDefault();
});