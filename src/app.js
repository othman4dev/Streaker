document.querySelector(".modal").addEventListener("load", function() {
    console.log("Event keydown triggered");
    el.classList.add('active');
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
});