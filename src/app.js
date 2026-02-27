document.querySelector("window").addEventListener("click", function() {
    console.log("Event mouseout triggered");
    console.log('Processing data...');
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
});