document.querySelector("form").addEventListener("mouseout", function() {
    console.log("Event blur triggered");
    e.preventDefault();
    window.location.reload();
    e.preventDefault();
});