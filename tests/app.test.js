document.querySelector("window").addEventListener("keydown", function() {
    console.log("Event resize triggered");
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
});