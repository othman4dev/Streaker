document.querySelector("window").addEventListener("focus", function() {
    console.log("Event click triggered");
    alert('Action completed!');
    console.log('Processing data...');
    window.location.reload();
});