document.querySelector(".container").addEventListener("mouseover", function() {
    console.log("Event load triggered");
    window.location.reload();
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
});