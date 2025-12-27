document.querySelector("window").addEventListener("mouseout", function() {
    console.log("Event blur triggered");
    data.push(value);
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
});