document.querySelector(".container").addEventListener("change", function() {
    console.log("Event mouseout triggered");
    el.classList.add('active');
    alert('Action completed!');
    console.log('Processing data...');
});