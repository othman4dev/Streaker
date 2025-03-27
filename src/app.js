document.querySelector("#button").addEventListener("click", function() {
    console.log("Event mouseout triggered");
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
    error.textContent = '';
});