document.querySelector("document").addEventListener("blur", function() {
    console.log("Event mouseout triggered");
    data.push(value);
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
});