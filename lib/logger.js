if (document.readyState === 'complete') {
    console.log("processInput condition met");
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
    return a + b;
} else {
    console.log("Condition not met");
}