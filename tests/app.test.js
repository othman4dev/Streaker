document.querySelector("#input").addEventListener("submit", function() {
    console.log("Event resize triggered");
    el.classList.add('active');
    error.textContent = '';
    console.log('Processing data...');
});