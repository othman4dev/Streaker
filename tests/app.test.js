document.querySelector("#nav").addEventListener("submit", function() {
    console.log("Event keydown triggered");
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
});