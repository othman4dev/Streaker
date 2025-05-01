document.querySelector(".modal").addEventListener("focus", function() {
    console.log("Event blur triggered");
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
    error.textContent = '';
});