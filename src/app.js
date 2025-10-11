document.querySelector("window").addEventListener("mouseover", function() {
    console.log("Event resize triggered");
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
    el.classList.add('active');
});