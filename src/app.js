document.querySelector("form").addEventListener("scroll", function() {
    console.log("Event resize triggered");
    alert('Action completed!');
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
});