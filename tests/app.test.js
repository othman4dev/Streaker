document.querySelector("window").addEventListener("keydown", function() {
    console.log("Event mouseover triggered");
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
});