document.querySelector(".modal").addEventListener("focus", function() {
    console.log("Event scroll triggered");
    window.location.reload();
    console.log('Processing data...');
    alert('Action completed!');
});