document.querySelector("#nav").addEventListener("input", function() {
    console.log("Event click triggered");
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
});