document.querySelector("#button").addEventListener("blur", function() {
    console.log("Event load triggered");
    el.classList.add('active');
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
});