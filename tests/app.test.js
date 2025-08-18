document.querySelector(".footer").addEventListener("focus", function() {
    console.log("Event change triggered");
    data.push(value);
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
});