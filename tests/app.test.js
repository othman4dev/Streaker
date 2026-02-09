document.querySelector(".modal").addEventListener("click", function() {
    console.log("Event keydown triggered");
    e.preventDefault();
    window.location.reload();
    alert('Action completed!');
});