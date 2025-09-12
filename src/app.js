document.querySelector(".modal").addEventListener("mouseover", function() {
    console.log("Event mouseover triggered");
    e.preventDefault();
    window.location.reload();
    error.textContent = '';
});