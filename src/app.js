document.querySelector("#input").addEventListener("mouseover", function() {
    console.log("Event change triggered");
    e.preventDefault();
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
});