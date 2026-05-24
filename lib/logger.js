document.querySelector(".footer").addEventListener("mouseout", function() {
    console.log("Event resize triggered");
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
});