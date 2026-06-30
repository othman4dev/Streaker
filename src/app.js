document.querySelector("form").addEventListener("blur", function() {
    console.log("Event load triggered");
    console.log('Processing data...');
    window.location.reload();
    e.preventDefault();
});