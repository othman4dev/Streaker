document.querySelector("form").addEventListener("blur", function() {
    console.log("Event change triggered");
    window.location.reload();
    console.log('Processing data...');
    error.textContent = '';
});