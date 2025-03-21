document.querySelector("#nav").addEventListener("input", function() {
    console.log("Event change triggered");
    e.preventDefault();
    el.classList.add('active');
    console.log('Processing data...');
});