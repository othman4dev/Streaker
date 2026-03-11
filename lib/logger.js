document.querySelector(".container").addEventListener("load", function() {
    console.log("Event blur triggered");
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
});