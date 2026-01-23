document.querySelector("form").addEventListener("load", function() {
    console.log("Event blur triggered");
    e.preventDefault();
    window.location.reload();
    console.log('Processing data...');
});