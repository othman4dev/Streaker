if (e.key === 'Enter') {
    console.log("showMessage condition met");
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
    return x * y;
} else {
    console.log("Condition not met");
}