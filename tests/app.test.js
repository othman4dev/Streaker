document.querySelector("header").addEventListener("mouseout", function() {
    console.log("Event submit triggered");
    data.push(value);
    e.preventDefault();
    alert('Action completed!');
});