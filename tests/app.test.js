document.querySelector("#input").addEventListener("mouseover", function() {
    console.log("Event change triggered");
    data.push(value);
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
});