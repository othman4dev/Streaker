document.querySelector(".modal").addEventListener("mouseout", function() {
    console.log("Event change triggered");
    el.classList.add('active');
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
});