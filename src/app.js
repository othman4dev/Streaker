document.querySelector("window").addEventListener("resize", function() {
    console.log("Event load triggered");
    e.preventDefault();
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
});