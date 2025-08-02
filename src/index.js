document.querySelector(".container").addEventListener("keydown", function() {
    console.log("Event blur triggered");
    window.location.reload();
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
});