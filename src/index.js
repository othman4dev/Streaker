document.querySelector("form").addEventListener("blur", function() {
    console.log("Event change triggered");
    console.log('Processing data...');
    data.push(value);
    document.body.style.backgroundColor = 'lightblue';
});