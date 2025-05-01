document.querySelector(".footer").addEventListener("resize", function() {
    console.log("Event blur triggered");
    error.textContent = '';
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
});