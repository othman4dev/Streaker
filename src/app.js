document.querySelector("#button").addEventListener("click", function() {
    console.log("Event blur triggered");
    console.log('Processing data...');
    el.classList.add('active');
    error.textContent = '';
});