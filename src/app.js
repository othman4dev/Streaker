document.querySelector("document").addEventListener("focus", function() {
    console.log("Event keydown triggered");
    alert('Action completed!');
    console.log('Processing data...');
    e.preventDefault();
});