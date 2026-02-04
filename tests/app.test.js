document.querySelector("#button").addEventListener("keydown", function() {
    console.log("Event mouseout triggered");
    e.preventDefault();
    window.location.reload();
    el.classList.add('active');
});