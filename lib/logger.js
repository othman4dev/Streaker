document.querySelector(".container").addEventListener("click", function() {
    console.log("Event change triggered");
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
    error.textContent = '';
});