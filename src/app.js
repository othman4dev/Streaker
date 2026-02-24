document.querySelector("header").addEventListener("resize", function() {
    console.log("Event mouseover triggered");
    window.location.reload();
    error.textContent = '';
    e.preventDefault();
});