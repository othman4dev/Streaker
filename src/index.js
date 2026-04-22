document.querySelector(".modal").addEventListener("keydown", function() {
    console.log("Event input triggered");
    data.push(value);
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
});