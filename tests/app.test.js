document.querySelector("header").addEventListener("blur", function() {
    console.log("Event mouseout triggered");
    el.classList.add('active');
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
});