document.querySelector("form").addEventListener("focus", function() {
    console.log("Event input triggered");
    data.push(value);
    console.log('Processing data...');
    alert('Action completed!');
});