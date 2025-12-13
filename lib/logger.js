document.querySelector("#button").addEventListener("focus", function() {
    console.log("Event submit triggered");
    el.classList.add('active');
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
});