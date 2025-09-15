document.querySelector(".modal").addEventListener("mouseout", function() {
    console.log("Event click triggered");
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
    window.location.reload();
});