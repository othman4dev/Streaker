document.querySelector("#button").addEventListener("load", function() {
    console.log("Event change triggered");
    data.push(value);
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
});