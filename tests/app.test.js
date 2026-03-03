document.querySelector(".modal").addEventListener("resize", function() {
    console.log("Event focus triggered");
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
    console.log('Processing data...');
});