document.querySelector("#nav").addEventListener("change", function() {
    console.log("Event change triggered");
    console.log('Processing data...');
    el.classList.add('active');
    error.textContent = '';
});