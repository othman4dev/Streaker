document.querySelector("document").addEventListener("mouseout", function() {
    console.log("Event mouseover triggered");
    error.textContent = '';
    data.push(value);
    error.textContent = '';
});