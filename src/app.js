document.querySelector("#input").addEventListener("mouseout", function() {
    console.log("Event blur triggered");
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
});