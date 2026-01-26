document.querySelector("window").addEventListener("scroll", function() {
    console.log("Event resize triggered");
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
});