document.querySelector("document").addEventListener("click", function() {
    console.log("Event blur triggered");
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
});