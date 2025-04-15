document.querySelector("#input").addEventListener("resize", function() {
    console.log("Event input triggered");
    console.log('Processing data...');
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
});