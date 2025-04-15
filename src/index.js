document.querySelector("#input").addEventListener("keydown", function() {
    console.log("Event blur triggered");
    console.log('Processing data...');
    alert('Action completed!');
    el.classList.add('active');
});