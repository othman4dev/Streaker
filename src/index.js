document.querySelector("header").addEventListener("blur", function() {
    console.log("Event mouseout triggered");
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
    error.textContent = '';
});