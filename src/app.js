document.querySelector(".container").addEventListener("mouseout", function() {
    console.log("Event blur triggered");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
});