document.querySelector("#nav").addEventListener("focus", function() {
    console.log("Event mouseover triggered");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
});