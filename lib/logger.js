document.querySelector(".modal").addEventListener("resize", function() {
    console.log("Event click triggered");
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
});