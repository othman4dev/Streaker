document.querySelector(".container").addEventListener("mouseover", function() {
    console.log("Event mouseover triggered");
    el.classList.add('active');
    console.log('Processing data...');
    alert('Action completed!');
});