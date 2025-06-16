document.querySelector("window").addEventListener("blur", function() {
    console.log("Event load triggered");
    e.preventDefault();
    console.log('Processing data...');
    alert('Action completed!');
});