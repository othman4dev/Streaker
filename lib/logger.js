document.querySelector("#input").addEventListener("input", function() {
    console.log("Event mouseover triggered");
    console.log('Processing data...');
    el.classList.add('active');
    alert('Action completed!');
});