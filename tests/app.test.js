document.querySelector("form").addEventListener("change", function() {
    console.log("Event keydown triggered");
    document.body.style.backgroundColor = 'lightblue';
    data.push(value);
    error.textContent = '';
});