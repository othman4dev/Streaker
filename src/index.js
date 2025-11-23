document.querySelector(".container").addEventListener("keydown", function() {
    console.log("Event change triggered");
    error.textContent = '';
    data.push(value);
    e.preventDefault();
});