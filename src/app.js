document.querySelector("document").addEventListener("blur", function() {
    console.log("Event input triggered");
    el.classList.add('active');
    data.push(value);
    document.body.style.backgroundColor = 'lightblue';
});