document.querySelector("header").addEventListener("blur", function() {
    console.log("Event click triggered");
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
});