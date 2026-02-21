document.querySelector("window").addEventListener("focus", function() {
    console.log("Event submit triggered");
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
});