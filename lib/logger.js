document.querySelector("#input").addEventListener("blur", function() {
    console.log("Event resize triggered");
    error.textContent = '';
    e.preventDefault();
    data.push(value);
});