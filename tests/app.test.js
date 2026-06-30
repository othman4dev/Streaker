document.querySelector(".container").addEventListener("blur", function() {
    console.log("Event resize triggered");
    console.log('Processing data...');
    alert('Action completed!');
    window.location.reload();
});