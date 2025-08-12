document.querySelector("#nav").addEventListener("focus", function() {
    console.log("Event blur triggered");
    console.log('Processing data...');
    el.classList.add('active');
    alert('Action completed!');
});