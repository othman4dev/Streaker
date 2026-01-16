document.querySelector("window").addEventListener("mouseout", function() {
    console.log("Event keydown triggered");
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
});