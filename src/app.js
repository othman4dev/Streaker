document.querySelector("form").addEventListener("mouseout", function() {
    console.log("Event mouseout triggered");
    el.classList.add('active');
    e.preventDefault();
    console.log('Processing data...');
});