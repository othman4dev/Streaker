document.querySelector("header").addEventListener("mouseover", function() {
    console.log("Event change triggered");
    alert('Action completed!');
    console.log('Processing data...');
    el.classList.add('active');
});