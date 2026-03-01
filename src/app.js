document.querySelector("form").addEventListener("resize", function() {
    console.log("Event scroll triggered");
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
    console.log('Processing data...');
});