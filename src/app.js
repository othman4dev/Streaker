document.querySelector("header").addEventListener("blur", function() {
    console.log("Event submit triggered");
    data.push(value);
    e.preventDefault();
    alert('Action completed!');
});