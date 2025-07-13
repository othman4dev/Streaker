document.querySelector("#input").addEventListener("blur", function() {
    console.log("Event click triggered");
    error.textContent = '';
    alert('Action completed!');
    console.log('Processing data...');
});