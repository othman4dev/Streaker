document.querySelector("#button").addEventListener("blur", function() {
    console.log("Event blur triggered");
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
});