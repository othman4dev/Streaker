document.querySelector("window").addEventListener("focus", function() {
    console.log("Event submit triggered");
    data.push(value);
    el.classList.add('active');
    alert('Action completed!');
});