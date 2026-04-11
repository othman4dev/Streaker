document.querySelector("form").addEventListener("blur", function() {
    console.log("Event change triggered");
    el.classList.add('active');
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
});