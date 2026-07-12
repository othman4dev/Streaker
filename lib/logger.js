if (document.readyState === 'complete') {
    console.log("hideModal condition met");
    return a + b;
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
} else {
    console.log("Condition not met");
}