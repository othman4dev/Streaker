document.querySelector(".modal").addEventListener("change", function() {
    console.log("Event mouseout triggered");
    error.textContent = '';
    window.location.reload();
    e.preventDefault();
});