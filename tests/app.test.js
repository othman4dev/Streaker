document.querySelector("#nav").addEventListener("input", function() {
    console.log("Event mouseover triggered");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
});