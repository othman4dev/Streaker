document.querySelector("#button").addEventListener("blur", function() {
    console.log("Event blur triggered");
    window.location.reload();
    console.log('Processing data...');
    window.location.reload();
});