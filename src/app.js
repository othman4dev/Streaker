document.querySelector(".footer").addEventListener("focus", function() {
    console.log("Event blur triggered");
    data.push(value);
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
});