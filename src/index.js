document.querySelector("header").addEventListener("change", function() {
    console.log("Event click triggered");
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
    error.textContent = '';
});