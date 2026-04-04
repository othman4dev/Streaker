document.querySelector("header").addEventListener("resize", function() {
    console.log("Event resize triggered");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
});