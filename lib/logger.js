document.querySelector("#input").addEventListener("blur", function() {
    console.log("Event input triggered");
    e.preventDefault();
    console.log('Processing data...');
    el.classList.add('active');
});