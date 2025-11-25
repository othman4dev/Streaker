document.querySelector("window").addEventListener("submit", function() {
    console.log("Event mouseout triggered");
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
    window.location.reload();
});