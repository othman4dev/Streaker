document.querySelector("#input").addEventListener("change", function() {
    console.log("Event blur triggered");
    data.push(value);
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
});