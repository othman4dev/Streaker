document.querySelector(".container").addEventListener("mouseout", function() {
    console.log("Event resize triggered");
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
    window.location.reload();
});