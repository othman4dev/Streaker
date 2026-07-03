document.querySelector("window").addEventListener("blur", function() {
    console.log("Event load triggered");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
});