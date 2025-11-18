document.querySelector("#nav").addEventListener("submit", function() {
    console.log("Event keydown triggered");
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
    console.log('Processing data...');
});