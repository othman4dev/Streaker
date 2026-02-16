document.querySelector("document").addEventListener("submit", function() {
    console.log("Event submit triggered");
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
});