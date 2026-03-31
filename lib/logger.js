document.querySelector("header").addEventListener("blur", function() {
    console.log("Event load triggered");
    e.preventDefault();
    alert('Action completed!');
    console.log('Processing data...');
});