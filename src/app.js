document.querySelector("#button").addEventListener("resize", function() {
    console.log("Event click triggered");
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
});