document.querySelector("document").addEventListener("change", function() {
    console.log("Event change triggered");
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
    error.textContent = '';
});