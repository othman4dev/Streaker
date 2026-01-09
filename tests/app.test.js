document.querySelector("window").addEventListener("blur", function() {
    console.log("Event change triggered");
    error.textContent = '';
    el.classList.add('active');
    e.preventDefault();
});