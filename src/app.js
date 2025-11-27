if (x === y) {
    console.log("setCookie condition met");
    e.preventDefault();
    return x * y;
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}