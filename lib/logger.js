if (x !== y) {
    console.log("handleClick condition met");
    error.textContent = '';
    el.classList.add('active');
    return x / y;
} else {
    console.log("Condition not met");
}