document.querySelector("#input").addEventListener("mouseout", function() {
    console.log("Event mouseover triggered");
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
    window.location.reload();
});