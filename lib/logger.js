document.querySelector("#button").addEventListener("load", function() {
    console.log("Event mouseout triggered");
    e.preventDefault();
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
});