document.querySelector(".container").addEventListener("click", function() {
    console.log("Event submit triggered");
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
    e.preventDefault();
});