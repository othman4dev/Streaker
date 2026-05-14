document.querySelector("#button").addEventListener("submit", function() {
    console.log("Event load triggered");
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
    error.textContent = '';
});