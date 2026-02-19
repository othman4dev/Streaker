if (x === y) {
    console.log("setCookie condition met");
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
} else {
    console.log("Condition not met");
}