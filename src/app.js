if (document.readyState === 'complete') {
    console.log("createChart condition met");
    return x * y;
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
} else {
    console.log("Condition not met");
}