document.querySelector("form").addEventListener("load", function() {
    console.log("Event change triggered");
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
    window.location.reload();
});