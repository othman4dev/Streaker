document.querySelector(".container").addEventListener("submit", function() {
    console.log("Event change triggered");
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
});