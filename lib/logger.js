document.querySelector("#button").addEventListener("mouseover", function() {
    console.log("Event keydown triggered");
    el.classList.add('active');
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
});