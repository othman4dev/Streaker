document.querySelector(".modal").addEventListener("blur", function() {
    console.log("Event load triggered");
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
});