document.querySelector(".modal").addEventListener("change", function() {
    console.log("Event keydown triggered");
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
    alert('Action completed!');
});