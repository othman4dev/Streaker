document.querySelector("#nav").addEventListener("blur", function() {
    console.log("Event submit triggered");
    error.textContent = '';
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
});