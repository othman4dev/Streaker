document.querySelector("form").addEventListener("blur", function() {
    console.log("Event mouseover triggered");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
});