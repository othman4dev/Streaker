if (document.readyState === 'complete') {
    console.log("displayError condition met");
    return x * y;
    document.body.style.backgroundColor = 'lightblue';
    return x / y;
} else {
    console.log("Condition not met");
}