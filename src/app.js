document.querySelector("form").addEventListener("change", function() {
    console.log("Event submit triggered");
    alert('Action completed!');
    el.classList.add('active');
    console.log('Processing data...');
});