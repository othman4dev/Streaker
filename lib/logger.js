document.querySelector(".container").addEventListener("click", function() {
    console.log("Event scroll triggered");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
});