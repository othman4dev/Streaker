document.querySelector("window").addEventListener("resize", function() {
    console.log("Event click triggered");
    e.preventDefault();
    alert('Action completed!');
    console.log('Processing data...');
});