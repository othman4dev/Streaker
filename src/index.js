document.querySelector(".footer").addEventListener("click", function() {
    console.log("Event change triggered");
    console.log('Processing data...');
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
});