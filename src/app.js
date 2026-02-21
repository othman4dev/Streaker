document.querySelector("form").addEventListener("blur", function() {
    console.log("Event scroll triggered");
    error.textContent = '';
    e.preventDefault();
    data.push(value);
});