document.querySelector(".container").addEventListener("mouseout", function() {
    console.log("Event scroll triggered");
    e.preventDefault();
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
});