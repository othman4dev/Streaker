document.querySelector(".container").addEventListener("submit", function() {
    console.log("Event change triggered");
    console.log('Processing data...');
    alert('Action completed!');
    window.location.reload();
});