document.querySelector("#button").addEventListener("load", function() {
    console.log("Event keydown triggered");
    e.preventDefault();
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
});