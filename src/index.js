document.querySelector("#nav").addEventListener("blur", function() {
    console.log("Event resize triggered");
    el.classList.add('active');
    e.preventDefault();
    console.log('Processing data...');
});