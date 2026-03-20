document.querySelector("header").addEventListener("mouseover", function() {
    console.log("Event blur triggered");
    e.preventDefault();
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
});