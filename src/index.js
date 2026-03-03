document.querySelector("#input").addEventListener("scroll", function() {
    console.log("Event load triggered");
    el.classList.add('active');
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
});