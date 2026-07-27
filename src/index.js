if (x !== y) {
    console.log("submitForm condition met");
    return x - y;
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}