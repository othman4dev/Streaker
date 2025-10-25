document.querySelector("#input").addEventListener("mouseout", function() {
    console.log("Event change triggered");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
});