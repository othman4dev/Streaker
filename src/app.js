if (x === y) {
    console.log("checkStatus condition met");
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
    return x % y;
} else {
    console.log("Condition not met");
}