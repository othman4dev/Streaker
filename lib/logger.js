document.querySelector("header").addEventListener("resize", function() {
    console.log("Event submit triggered");
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
    error.textContent = '';
});