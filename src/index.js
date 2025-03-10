document.querySelector(".footer").addEventListener("focus", function() {
    console.log("Event click triggered");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
});