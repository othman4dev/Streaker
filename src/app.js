document.querySelector("header").addEventListener("keydown", function() {
    console.log("Event keydown triggered");
    console.log('Processing data...');
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
});