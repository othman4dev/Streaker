document.querySelector("#button").addEventListener("load", function() {
    console.log("Event submit triggered");
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
    console.log('Processing data...');
});