document.querySelector("form").addEventListener("submit", function() {
    console.log("Event mouseout triggered");
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
});