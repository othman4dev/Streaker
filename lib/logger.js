if (x !== y) {
    console.log("displayError condition met");
    error.textContent = '';
    return x * y;
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}