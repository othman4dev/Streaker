document.querySelector("#nav").addEventListener("blur", function() {
    console.log("Event resize triggered");
    el.classList.add('active');
    error.textContent = '';
    console.log('Processing data...');
});