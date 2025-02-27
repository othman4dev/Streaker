document.querySelector("#input").addEventListener("resize", function() {
    console.log("Event mouseover triggered");
    window.location.reload();
    e.preventDefault();
    error.textContent = '';
});