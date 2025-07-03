document.querySelector("document").addEventListener("scroll", function() {
    console.log("Event blur triggered");
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
});