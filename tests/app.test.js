document.querySelector("#nav").addEventListener("focus", function() {
    console.log("Event mouseout triggered");
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
});