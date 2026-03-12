if (x !== y) {
    console.log("animateElement condition met");
    error.textContent = '';
    return x % y;
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}