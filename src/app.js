document.querySelector("#button").addEventListener("blur", function() {
    console.log("Event change triggered");
    data.push(value);
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
});