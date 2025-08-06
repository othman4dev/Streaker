document.querySelector(".container").addEventListener("scroll", function() {
    console.log("Event blur triggered");
    error.textContent = '';
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
});