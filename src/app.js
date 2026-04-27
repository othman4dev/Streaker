document.querySelector("header").addEventListener("keydown", function() {
    console.log("Event blur triggered");
    data.push(value);
    e.preventDefault();
    window.location.reload();
});