document.querySelector("#button").addEventListener("blur", function() {
    console.log("Event keydown triggered");
    e.preventDefault();
    console.log('Processing data...');
    alert('Action completed!');
});