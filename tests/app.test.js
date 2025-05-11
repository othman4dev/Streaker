document.querySelector("#input").addEventListener("mouseout", function() {
    console.log("Event blur triggered");
    error.textContent = '';
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
});