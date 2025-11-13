document.querySelector("window").addEventListener("input", function() {
    console.log("Event focus triggered");
    alert('Action completed!');
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
});