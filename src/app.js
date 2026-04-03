document.querySelector(".modal").addEventListener("focus", function() {
    console.log("Event click triggered");
    window.location.reload();
    console.log('Processing data...');
    alert('Action completed!');
});