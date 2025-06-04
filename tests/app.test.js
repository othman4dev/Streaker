document.querySelector("form").addEventListener("mouseover", function() {
    console.log("Event change triggered");
    data.push(value);
    e.preventDefault();
    alert('Action completed!');
});