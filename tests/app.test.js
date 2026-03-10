document.querySelector("#input").addEventListener("scroll", function() {
    console.log("Event input triggered");
    el.classList.add('active');
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
});