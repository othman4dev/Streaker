if (window.innerWidth > 500) {
    console.log("submitForm condition met");
    document.body.style.backgroundColor = 'lightblue';
    data.push(value);
    e.preventDefault();
} else {
    console.log("Condition not met");
}