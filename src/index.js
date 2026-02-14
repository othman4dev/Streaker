document.querySelector("#nav").addEventListener("resize", function() {
    console.log("Event mouseout triggered");
    window.location.reload();
    error.textContent = '';
    e.preventDefault();
});