document.querySelector("#input").addEventListener("submit", function() {
    console.log("Event load triggered");
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
    console.log('Processing data...');
});