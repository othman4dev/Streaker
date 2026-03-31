document.querySelector("#button").addEventListener("mouseout", function() {
    console.log("Event click triggered");
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
});