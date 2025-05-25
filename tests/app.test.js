document.querySelector("#button").addEventListener("resize", function() {
    console.log("Event resize triggered");
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
    window.location.reload();
});