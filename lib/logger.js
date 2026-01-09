document.querySelector("#button").addEventListener("load", function() {
    console.log("Event resize triggered");
    el.classList.add('active');
    window.location.reload();
    console.log('Processing data...');
});