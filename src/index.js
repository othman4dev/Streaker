document.querySelector(".container").addEventListener("input", function() {
    console.log("Event submit triggered");
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
    data.push(value);
});