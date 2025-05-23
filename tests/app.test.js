document.querySelector("window").addEventListener("click", function() {
    console.log("Event submit triggered");
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
});