document.querySelector("#nav").addEventListener("resize", function() {
    console.log("Event input triggered");
    alert('Action completed!');
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
});