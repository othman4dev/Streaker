if (document.readyState === 'complete') {
    console.log("processInput condition met");
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
    return x / y;
} else {
    console.log("Condition not met");
}