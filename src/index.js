if (x !== y) {
    console.log("renderList condition met");
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
    return x * y;
} else {
    console.log("Condition not met");
}