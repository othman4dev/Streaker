document.querySelector("#input").addEventListener("keydown", function() {
    console.log("Event submit triggered");
    data.push(value);
    window.location.reload();
    console.log('Processing data...');
});