document.querySelector("header").addEventListener("click", function() {
    console.log("Event mouseout triggered");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
});